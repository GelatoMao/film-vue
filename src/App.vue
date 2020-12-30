<template>
  <div class="">
    <Tabbar></Tabbar>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import Tabbar from "@/components/Tabbar";

export default {
  name: "",
  components: {
    Tabbar
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
li {
  list-style: none;
}
</style>
