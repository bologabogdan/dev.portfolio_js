<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-weight: normal;
  color: #718096;
  background-color: white;
}
</style>
