<template>
  <div class="">
    <ul>
      <li
        v-for="data in $store.state.comingList"
        :key="data.filmId"
        @click="handleClick(data.isPresale, data.filmId)"
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
import { MessageBox } from "mint-ui";
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
    //如果store中的list长度为0 则发送ajax请求 否则使用缓存数据
    if (this.$store.state.comingList.length === 0) {
      //ajax请求 异步的数据存在store中
      this.$store.dispatch("getComingListAction");
    } else {
      console.log("使用缓存数据");
    }
  },
  methods: {
    handleClick(data,id) {
      if (!data) {
        MessageBox({
          title: "提示",
          message: "该电影没有排期，看看其他电影",
          showCancelButton: true
        }).then(res => {
          if (res === "confirm") {
            console.log("回到首页");
            this.$router.push(`/film/nowplaying`)
          }
        });
      }
      // 跳转到详情页
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
