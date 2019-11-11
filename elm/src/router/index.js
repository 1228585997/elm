import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import city from '../components/city.vue'
import shoplist from '../components/shoplist.vue'
import shopsearch from '../components/shopsearch.vue'
import order from '../components/order.vue'
import profile from '../components/profile.vue'
import balance from '../components/balance.vue'
import shop from '../components/shop.vue'
import download from '../components/download.vue'
<<<<<<< HEAD
import discounts from '../components/discounts.vue'
import total from '../components/total.vue'
import balance_details from '../components/balance_details.vue'
import total_details from '../components/total_details.vue'
import shop_details from '../components/shop_details.vue'
import member from '../components/member.vue'
=======
<<<<<<< HEAD
import food from '../components/food.vue'
=======
import login from '../components/login.vue'
import forget from '../components/forget.vue'
import service from  '../components/service.vue'
import questionDetail from  '../components/questionDetail.vue'
>>>>>>> bcd0b15a434de59278dfb2b6f5636e773ec41b7e
>>>>>>> f2930b13e10442a61e87be12481f3cc86126a80d
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  //城市列表
  {
    path: '/city/:id/:type',
    // 需要在路由配置后面添加对应的参数即需要添加/:id
    // 如果不添加：id数据会在刷新的时候消失。
    name: 'city',
    component: city,
  },
  //商品列表
  {
    path: '/shoplist/:id',
    name: 'shoplist',
    component: shoplist
  },
  //食品分类列表
  {
    path: '/food',
    name: 'food',
    component: food
  },
  // 搜索列表
  {
    path: '/shopsearch',
    name: 'shopsearch',
    component: shopsearch
  },
  //订单列表
  {
    path: '/order',
    name: 'order',
    component: order
  },
  //我的
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  // 余额详情
  {
    path: '/balance',
    name: 'balance',
    component: balance,
    children: [
      // 余额说明
      {
        path: 'balance_details',
        name: 'balance_details',
        component: balance_details
      }
    ]
  },
  // 我的优惠
  {
    path: '/discounts',
    name: 'discounts',
    component: discounts,

  },
  // 我的积分
  {
    path: '/total',
    name: 'total',
    component: total,
    children: [
      // 积分详情
      {
        path: 'total_details',
        name: 'total_details',
        component: total_details
      }
    ]
  },
  // 积分商城
  {
    path: '/shop_details',
    name: 'shop_details',
    component: shop_details
  },
  // 会员卡
  {
    path: '/member',
    name: 'member',
    component: member
  },
  //下载ele
  {
    path: '/download',
    name: 'download',
    component: download
  },
  //商品计算页面
  {
    path: '/shop/:id',
    name: 'shop',
    component: shop
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component:login
  },
  //修改
  {
    path: '/forget',
    name: 'forget',
    component:forget
  },
  //服务中心
  {
    path: '/service',
    name: 'service',
    component:service,
	//服务中心详情页
	children:[
		{
			path: 'questionDetail',
			name: 'questionDetail',
			component:questionDetail,
		}
	]
  },
]

const router = new VueRouter({
  routes
})
//全局导航守卫
// router.beforeEach((to,from,next)=>{
// 	console.log(1)
// 	next()
// })
export default router
