<template>
  <tabbar>
    <tabbar-item path="/home">
      <template v-slot:active-icon><img src="src/assets/img/tabbar/home/active.jpg"></template>
      <template v-slot:deactive-icon><img src="src/assets/img/tabbar/home/deactive.jpg"></template>
      <template v-slot:txt><div>首页</div></template>
    </tabbar-item>

    <tabbar-item path="/about">
      <template v-slot:active-icon><img src="src/assets/img/tabbar/about/active.jpg"></template>
      <template v-slot:deactive-icon><img src="src/assets/img/tabbar/about/deactive.jpg"></template>
      <template v-slot:txt><div>关于</div></template>
    </tabbar-item>

    <tabbar-item path="/cart">
      <template v-slot:active-icon><img src="src/assets/img/tabbar/cart/active.jpg"></template>
      <template v-slot:deactive-icon><img src="src/assets/img/tabbar/cart/deactive.jpg"></template>
      <template v-slot:txt><div>购物车</div></template>
    </tabbar-item>

    <tabbar-item path="/profile">
      <template v-slot:active-icon><img src="src/assets/img/tabbar/profile/active.jpg"></template>
      <template v-slot:deactive-icon><img src="src/assets/img/tabbar/profile/deactive.jpg"></template>
      <template v-slot:txt><div>我的</div></template>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from "../../common/tabbar/Tabbar";
  import TabbarItem from "../../common/tabbar/TabbarItem";
  export default {
    name: "MainTabbar",
    components: {TabbarItem, Tabbar}
  }
</script>

<style scoped>

</style>