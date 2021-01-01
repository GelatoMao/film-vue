<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{ data.name }}
        <p style="font-size:12px">{{ data.address }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      datalist: [],
      mystyle: {
        height: "0px"
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    //获取视口高度
    // console.log(document.documentElement.clientHeight);
    //设置高度是视口高度减去底部导航的高度
    this.mystyle.height = document.documentElement.clientHeight - 50 + "px";
    let id = localStorage.getItem("cityId");
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=1940366`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      this.datalist = res.data.data.cinemas;
      // 需要等数据完全获取完毕后才使用betterscroll
      //nextTick会等数据完全更新到dom节点上才会执行这个回调函数
      this.$nextTick(() => {
        new BetterScroll(".cinema", {
          scrollbar: {
            fade: true,
            interactive: false
          }
        });
      });
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.cinema {
  height: 500px;
  overflow: hidden;
  position: relative;
}
li {
  height: 80px;
}
</style>
