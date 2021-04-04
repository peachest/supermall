<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link>-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
  <router-view/>
  <main-tabbar/>
</template>

<script>
  import MainTabbar from "./components/content/mainTabbar/MainTabbar";
  export default {
    name: 'app',
    components: {
      MainTabbar
    }
  }

</script>

<style lang="less">
  /*@import "./assets/css/base.css" ;*/
</style>
