<template>
  <nav>
    <!-- 声明式导航 -->
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
        <i class="iconfont icon-form"></i>
        film
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="iconfont icon-form"></i>
        cinema
      </router-link>
      <router-link to="/center" tag="li" activeClass="myactive">
        <i class="iconfont icon-form"></i>
        center
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "",
  components: {},
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

<style scoped lang="scss">
.myactive {
  color: red;
}
nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: white;
  ul {
    display: flex;
    li {
      flex: 1;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>
