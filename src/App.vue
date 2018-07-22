<template>
  <div id="app">
    <div>
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
      <vs-topbar class="header">
        <vs-button vs-type="flat" vs-color="dark" vs-radius="50%" vs-icon="menu"></vs-button>
        <vs-input vs-icon="search" vs-placeholder="Search" />
        <vs-button vs-type="flat" vs-color="dark" vs-radius="50%" vs-icon="more_vert" style="margin-left: auto;"></vs-button>
      </vs-topbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
.header {
  justify-content: flex-start;
  padding: 20px 10px 20px;
}
.title {
  margin: 1rem 0.2rem 1rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
