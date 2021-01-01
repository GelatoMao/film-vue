import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //自定义的共享状态
    isTabbarShow: true,
    comingList: []
  },
  //过滤出自己想要的数据
  getters: {

  },
  // 唯一修改状态的位置
  mutations: {
    [HIDE_TABBAR_MUTATION](state, data) {
      state.isTabbarShow = data
    },
    [SHOW_TABBAR_MUTATION](state, data) {
      state.isTabbarShow = data
    },
    comingListMutation(state, data) {
      state.comingList = data
    }
  },
  actions: {
    //异步处理
    getComingListAction(store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=6033119',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093141712172974278901761","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
