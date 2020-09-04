<template>
  <div id="app">
    <van-nav-bar :title="title">
      <!-- <van-icon name="user" slot="right" /> -->
    </van-nav-bar>
    <router-view />
    <van-tabbar route>
    <van-tabbar-item replace to="/read">
      <span>阅读</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.read.active : icon.read.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item replace to="/subscribe">
      <span>订阅</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.subscribe.active : icon.subscribe.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item replace to="/search">
    <span>搜索</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.search.active : icon.search.inactive"
      >
    </van-tabbar-item>
    <van-tabbar-item replace to="/user">
      <span>我</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon.user.active : icon.user.inactive"
      >
    </van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      active: 0,
      icon: {
        read: {
          active: require("./assets/icons/read_selected.png"),
          inactive: require("./assets/icons/read.png")
        },
        subscribe: {
          active: require("./assets/icons/subscribe_selected.png"),
          inactive: require("./assets/icons/subscribe.png")
        },
        search: {
          active: require("./assets/icons/search_selected.png"),
          inactive: require("./assets/icons/search.png")
        },
        user: {
          active: require("./assets/icons/user_selected.png"),
          inactive: require("./assets/icons/user.png")
        }
      }
    }
  },
  mounted() {
    this.title = this.$route.meta.title; 
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
     }
  }
}
</script>

<style>
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>