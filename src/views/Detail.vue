<template>
  <div class="" v-if="filminfo">
    <!-- filminfo一开始是为空的，后面axios请求到数据后filminfo的值才不为空，所以要加判断语句，只有有值的情况下，才可以取到name属性 -->
    <img :src="filminfo.poster" class="poster" />
    <h2>{{ filminfo.name }}</h2>
    <h3>演职人员</h3>
    <swiper>
      <div
        class="swiper-slide"
        v-for="data in filminfo.actors"
        :key="data.name"
      >
        <img :src="data.avatarAddress" />
        <p>{{ data.name }}</p>
      </div>
    </swiper>
    <h3>剧照</h3>
    <swiper>
      <div
        class="swiper-slide"
        v-for="(data, index) in filminfo.photos"
        :key="index"
      >
        <img :src="data" />
        <p>{{ data.name }}</p>
      </div>
    </swiper>
  </div>
</template>

<script>
import axios from "axios";
import swiper from "@/views/Detail/DetailSwiper";

export default {
  name: "",
  components: {
    swiper
  },
  props: ["id"],
  data() {
    return {
      filminfo: null
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log("要id获取详情信息", this.$route.params.id, this.id);
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=3168057`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
        "X-Host": "mall.film-ticket.film.info"
      }
    }).then(res => {
      console.log(res.data);
      this.filminfo = res.data.data.film;
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.poster {
  width: 100%;
}
</style>
