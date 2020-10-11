<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <slot name="header"></slot>
    </div>
    <div class="sidebar-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  background: #212032;
  color: white;
  font-family: "Roboto";
}

.sidebar-header {
  display: flex;
  background: #0a0918;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}

.sidebar-body {
  padding: 20px;
  font-family: "Open Sans", sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}
</style>