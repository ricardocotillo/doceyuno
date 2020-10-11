<template>
  <div id="app">
    <Designer />
  </div>
</template>

<script>
import Designer from "./views/designer";
export default {
  name: "App",
  components: {
    Designer,
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
button {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  margin: 0;
  max-width: 100%;
  background-color: transparent;
}
button:focus {
  outline: 0;
}
</style>
