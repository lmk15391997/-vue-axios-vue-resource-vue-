<template>
  <div id="app">
    <router-link to="/node">node代理</router-link>
    <router-link to="/axios">axios远程代理</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
</style>
