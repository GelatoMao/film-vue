<template>
  <div class="">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="0"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
    >
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
    <div v-show="isShow">正在加载......</div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

Vue.filter("actorfilter", function(data) {
  // 将数组对象中的name过滤出来 这边要确保data存在 否则下面调用map方法会报错
  if (data) {
    let newlist = data.map(item => item.name);
    return newlist.join(" ");
  }
});

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      datalist: [],
      loading: false,
      current: 1,
      total: 0,
      isShow: true
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
      this.datalist = res.data.data.films;
      this.total = res.data.data.total;
    });
  },
  methods: {
    handleChangePage(id) {
      // console.log(id);
      // 编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`);
      //编程式导航-名字跳转
      this.$router.push({ name: "haha", params: { id: id } });
    },
    loadMore() {
      console.log("到底了");
      //禁用 一开始禁用 防止重复触发ajax请求
      this.loading = true;
      this.current++;
      //如果现有的数据的长度等于总长度的话 就停止发送ajax请求
      if (this.datalist.length === this.total) {
        this.isShow = false;
        return;
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=9503335`,
        // maizuo网站里的一些跨域处理
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res => {
        // 这边不能直接将获取的值去覆盖datalist数组 应该在原有数组的基础上去增加
        this.datalist = [...this.datalist, ...res.data.data.films];
        this.loading = false;
      });
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
