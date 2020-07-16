<template>
  <div id="app">
    <Navbar />
    <div class="container box mt-3 has-background-light">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  name: "App"
};
</script>

<style></style>
