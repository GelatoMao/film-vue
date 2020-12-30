<template>
  <div class="film">
    <swiper :key="looplist.length" ref="myswiper">
      <div class="swiper-slide" v-for="data in looplist" :key="data.bannerId">
        <img :src="data.imgUrl" />
      </div>
    </swiper>
    <!-- 给组件动态添加class -->
    <filmheader :class="isFixed ? 'fixed' : ''"></filmheader>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from "@/views/Film/Swiper";
import filmheader from "@/views/Film/FilmHeader";
import axios from "axios";
export default {
  name: "",
  components: {
    swiper,
    filmheader
  },
  props: {},
  data() {
    return {
      looplist: [],
      isFixed: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=310100&k=6214978",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
        "X-Host": "mall.cfg.common-banner"
      }
    }).then(res => {
      this.looplist = res.data.data;
      console.log(res.data);
    });
    // 单独写一个方法来封装监听 需要让onscroll这个事件只活在film组件中，而不影响其他组件
    //只有在当前这个组件中挂载这个事件，一离开这个组件，就解绑该组件 使用beforeDestroy这个生命周期函数
    window.onscroll = this.handleScroll;
  },
  beforeDestroy() {
    //解绑onscroll事件 给window绑定的事件在每个页面都会应用 所以在离开当前页面的时候需要解绑
    window.onscroll = null;
  },
  methods: {
    handleScroll() {
      //如果滚动距离大于轮播高度则固定住
      if (
        document.documentElement.scrollTop >=
        this.$refs.myswiper.$el.offsetHeight
      ) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
};
</script>

<style scoped lang="less"></style>
