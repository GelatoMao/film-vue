<template>
  <div class="">
    <mt-index-list>
      <mt-index-section
        :index="data.index"
        v-for="data in datalist"
        :key="data.index"
      >
        <!-- 直接在mt-cell上绑定事件不支持 需要在外面再套一个div，在div上绑定onclick事件 -->
        <div
          v-for="city in data.list"
          :key="city.cityId"
          @click="handleClick(city.cityId)"
        >
          <mt-cell :title="city.name"></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import axios from "axios";
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
      url: "https://m.maizuo.com/gateway?k=9229695",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
        "X-Host": "mall.film-ticket.city.list"
      }
    }).then(res => {
      this.datalist = this.handleCity(res.data.data.cities);
    });
  },
  methods: {
    //处理city数据 将相同字母开头的数据连在一起
    handleCity(datalist) {
      let letterArr = [],
        newlist = [];
      //创建26个字符数组
      for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      for (let j = 0; j < letterArr.length; j++) {
        //过滤出相同字母开头的地名
        let arr = datalist.filter(
          item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase()
        );
        //数组长度大于0的情况下才往newlist当中push
        if (arr.length) {
          newlist.push({
            index: letterArr[j],
            list: arr
          });
        }
      }
      console.log(newlist);
      return newlist;
    },

    handleClick(id) {
      console.log(id);
      //将id值存入localStorage中，
      localStorage.setItem("cityId", id);
      this.$router.push(`/cinema`)
    }
  }
};
</script>

<style scoped lang="less"></style>
