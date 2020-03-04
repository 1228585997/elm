import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  title:'' ,//服务中心
	  text:'',
	 orderList:[],
	 name:'',
	 addname:'' ,//add/addDetail的name
	 dataj:''
  },
  //计算价钱
  getters:{
    totalPrice(state) {
      if(state.orderList == '') {
       t = ''
       return
      } else {
       var t = 0
       state.orderList.forEach(el => {
        t += el.specfoods[0].price * (el.__v || 1)
       })
       console.log(t)
       return t;
      }
     }
  },
  mutations: {
	  //服务中心事件函数
	  arr(state,item){
		  state.title=item
	  },
	  arr1(state,v){
		  state.text=v
    },
    addOrder(state,item){
      state.orderList=item;
    },
	dataname(state,item){
		state.name=item
	},
	adddata(state,v){
		state.addname=v
	},
	dataj(state,item){
		state.dataj=item
	}
  }
})
