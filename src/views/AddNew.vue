<template>
  <div>
    <h1 class="title">Elevator</h1>
    <div class="form content center">
      <vs-slider v-for="s in elevatorStatuses" :key="s['atFloor']" vs-color="#db7d12" v-model="s['atFloor']"/>
      <vs-divider vs-color="#ad289f">Controller</vs-divider>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button @click="requestOut('DOWN')">Down</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button @click="requestOut('UP')">UP</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">Floor (request from outside):
          <vs-input-number v-model="floorOut"/>
        </vs-col>
      </vs-row>
      <vs-divider vs-color="#ad289f">For requests from inside</vs-divider>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-button @click="requestIn">Request</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">Floor (inside panel):
          <vs-input-number v-model="floorIn"/>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">ID:
          <vs-input-number v-model="elevatorId"/>
        </vs-col>
      </vs-row>
      <div>
        <h3>Queue: {{queue}}</h3>
        <h3>Insides: {{insides}}</h3>
        <h3>Outsides: {{outsides}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNew",
  data() {
    return {
      elevatorStatuses: [],
      queue: [],
      insides: [],
      outsides: [],
      floorOut: 0,
      floorIn: 0,
      elevatorId: 0
    };
  },
  methods: {
    requestOut: function(dir) {
      this.axios.post("http://localhost:8080/outside", {
        atFloor: this.floorOut,
        direction: dir
      });
    },
    requestIn: function() {
      this.axios.post("http://localhost:8080/inside", {
        toFloor: this.floorIn,
        elevatorId: this.elevatorId
      });
    },
    updateAll: function() {
      let vm = this;
      this.axios.get("http://localhost:8080/all").then(response => {
        vm.elevatorStatuses = response.data["status"];
        /*
          for (let r of response.data["status"]) {
            vm.elevatorStatuses.push(r);
          }
          */
        vm.queue = response.data["queue"];
        vm.insides = response.data["inside"];
        vm.outsides = response.data["outside"];
        setTimeout(this.updateAll, 500);
      });
    }
  },
  mounted() {
    this.updateAll();
  }
};
</script>
