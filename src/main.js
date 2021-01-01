import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入所有接口
import A11 from './module/moduleA'
// 导入部分接口
import { A1, A2 } from './module/moduleB'
// 将导入的接口重新命名
import { A1 as MyA1 } from './module/moduleB'

//这种方式导入是将所有方法导入了
// console.log(A11);

//需要用到哪个方法 就导入哪个方法
// console.log(A1, A2);
// console.log(MyA1);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
