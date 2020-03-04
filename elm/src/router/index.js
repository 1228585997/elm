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
import discounts from '../components/discounts.vue'
import total from '../components/total.vue'
import balance_details from '../components/balance_details.vue'
import total_details from '../components/total_details.vue'
import shop_details from '../components/shop_details.vue'
import member from '../components/member.vue'
import food from '../components/food.vue'
import login from '../components/login.vue'
import forget from '../components/forget.vue'
import service from '../components/service.vue'
import questionDetail from '../components/questionDetail.vue'
import info from '../components/info.vue'
import setusername from '../components/setusername.vue'
import address from '../components/address.vue'
import add from '../components/add.vue'
import addDetail from '../components/addDetail.vue'
import vipDescription from '../components/vipDescription.vue'
import payment from '../components/payment.vue'
import useCart from '../components/useCart.vue'
import hbDescription from '../components/hbDescription.vue'
import exchange from '../components/exchange.vue'
import commend from '../components/commend.vue'
import coupon from '../components/coupon.vue'
import download1 from '../components/download1.vue'
import confirmOrder from '../components/confirmOrder.vue'
import chooseAddress from '../components/chooseAddress.vue'
import addAddress from '../components/addAddress.vue'
import searchAddress from '../components/searchAddress.vue'
Vue.use(VueRouter)
const routes = [{
		path: '/',
		name: 'home',
		component: home,
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
		component: shoplist,
		meta:{
			keepAlive:true//需要缓存
		},
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
		component: profile,
		children: [{
			path: '/profile/info',
			name: 'info',
			component: info,
			children: [{
					path: '/profile/info/setusername',
					name: 'setusername',
					component: setusername,
				},
				{
					path: '/profile/info/address',
					name: 'address',
					component: address,
					children: [{
						path: '/profile/info/address/add',
						name: 'add',
						component: add,
						children: [{
							path: '/profile/info/address/add/addDetail',
							name: 'addDetail',
							component: addDetail,
						}]
					}]
				}
			]
		}]
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
		children: [{
				path: 'hbDescription', //说明
				name: 'hbDescription',
				component: hbDescription,
			},
			{
				path: 'exchange', //兑换红包
				name: 'exchange',
				component: exchange,
			},
			{
				path: 'commend', //推荐有奖
				name: 'commend',
				component: commend,
			},
			{
				path: 'coupon', //商家代金券说明
				name: 'coupon',
				component: coupon,
			},
			{
				path: 'download1', //下载
				name: 'download1',
				component: download1,
			}
		]
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
		component: member,
		children: [{
				path: 'vipDescription',
				name: 'vipDescription',
				component: vipDescription,
			},
			{
				path: 'payment',
				name: 'payment',
				component: payment,
			},
			{
				path: 'useCart',
				name: 'useCart',
				component: useCart,
			}
		]

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
		component: shop,
		meta:{
			keepAlive:true//需要缓存
		}
	},
	// 结算页面
	{
		path: '/confirmOrder',
		name: 'confirmOrder',
		component: confirmOrder,
		//元信息
		meta:{
			keepAlive:true//需要缓存
		},
		children: [
			// 确认订单
			{
				path: 'chooseAddress',
				name: 'chooseAddress',
				component: chooseAddress,
				children: [
					//添加地址
					{
						path: 'addAddress',
						name: 'addAddress',
						component: addAddress,
						children: [{
							path: 'searchAddress',
							name: 'searchAddress',
							component: searchAddress,
						}]
					}
				]
			}
		]
	},
	// 登录
	{
		path: '/login',
		name: 'login',
		component: login
	},
	 //修改
	{
		path: '/forget',
		name: 'forget',
		component: forget
	},
	//服务中心
	{
		path: '/service',
		name: 'service',
		component: service,
		//服务中心详情页
		children: [{
			path: 'questionDetail',
			name: 'questionDetail',
			component: questionDetail,
		}]
	},
]

const router = new VueRouter({
	routes,
	mode: 'history'
})
//全局导航守卫
// router.beforeEach((to,from,next)=>{
// 	console.log(1)
// 	next()
// })
export default router
