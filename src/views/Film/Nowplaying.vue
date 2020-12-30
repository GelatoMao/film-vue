<template>
  <div class="">
    <ul>
      <li
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleChangePage(data.filmId)"
      >
        <img :src="data.poster" />
        <h3>{{ data.name }}</h3>
        <p v-if="data.grade">观众评分:{{ data.grade }}</p>
        <p v-else>暂无评分</p>
        <!-- 如果后端传过来的数据不是我们想要的，要么对数据进行处理格式化，可以写函数，或者写一个过滤器 -->
        <!-- 如果没有data.actors返回形式 就使用后面过滤器 -->
        <p>主演:{{ data.actors | actorfilter }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

Vue.filter("actorfilter", function(data) {
  // 将数组对象中的name过滤出来
  let newlist = data.map(item => item.name);
  return newlist.join(" ");
});

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      datalist: []
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9503335",
      // maizuo网站里的一些跨域处理
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
        "X-Host": "mall.film-ticket.film.list"
      }
    }).then(res => {
      console.log(res.data);
      this.datalist = res.data.data.films;
    });
  },
  methods: {
    handleChangePage(id) {
      console.log(id);
      // 编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`);
      //编程式导航-名字跳转
      this.$router.push({ name: "haha", params: { id: id } });
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  li {
    padding: 10px;
    overflow: hidden;
    img {
      float: left;
      width: 100px;
    }
  }
}
</style>
