import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  title:'' ,//服务中心
	  text:''
  },
  mutations: {
	  //服务中心事件函数
	  arr(state,item){
		  state.title=item
	  },
	  arr1(state,v){
		  state.text=v
	  }
  },
  actions: {
  },
  modules: {
  }
})
