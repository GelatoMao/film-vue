<template>
  <div class="">
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "@/components/Tabbar";
//ES6导出
import { mapState } from "vuex";
// import bus from "@/bus";

export default {
  name: "",
  components: {
    tabbar
  },
  props: {},
  data() {
    return {
      // isShow: true
    };
  },
  computed: {
    //ES6展开合并运算符
    ...mapState(["isTabbarShow"])
  },
  watch: {},
  created() {},
  // beforeMount() {
  //   bus.$on("maizuo", data => {
  //     // console.log("被通知了", data);
  //     this.isShow = data;
  //   });
  // },
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
