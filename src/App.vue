<template>
  <div id="app">
    <div class="top">
     <h1>银河战舰登录系统</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/public.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fff;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.top{
  padding-top: 20px;
  text-align: right;
  box-sizing: border-box;
  padding-right: 80px;
}
</style>
