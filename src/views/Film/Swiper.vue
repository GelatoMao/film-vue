<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
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
  mounted() {
    new Swiper(".filmswiper", {
      //direction:'vertical'
      loop: true,
      //如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.swiper-wrapper {
  img {
    width: 100%;
  }
}
</style>
