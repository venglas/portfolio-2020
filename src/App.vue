<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  font-size: 10px;
}
body {
  color: $COLOR_font-base;
  font-family: 'Roboto', sans-serif;
  font-size: $SIZE_base-font;
  padding: 0;
  margin: 0;
}
</style>
