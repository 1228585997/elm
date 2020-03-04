<template>
	<div v-loading="loading">
		<headtop>
			<template v-slot:confirmOrder>
				<van-icon name="arrow-left" class="left" @click="$router.go(-1)" />
				<span class="head_logo">确认订单</span>
				<span class="head_login">
					<router-link to="/login">
						<span class="login_span">登录|注册</span>
					</router-link>
				</span>
			</template>
		</headtop>
		<div class="clearfix">
			<router-link to="/confirmOrder/chooseAddress">
				<div class="address">
					<p v-show="type1==1">请填写一个收货地址</p>
					<div v-if="this.$store.state.dataj.name">
						<span>名字: {{this.$store.state.dataj.name}}</span><br>
						<span>电话:{{this.$store.state.dataj.phone}}</span>
						<span>地址:{{this.$store.state.dataj.tag}}</span>
						<span>{{this.$store.state.dataj.address_detail}}</span>
						<van-icon name="arrow" class="arrow-right" size="30px" />
					</div>
				</div>
			</router-link>
			<router-view></router-view>
		</div>
		<div class="time">
			<div class="time-left">
				<h2>送达时间</h2>
			</div>
			<div class="time-right">
				<p>尽快送达 | 预计 01:50</p>
				<div class="only">蜂鸟专送</div>
			</div>
		</div>
		<div class="pay">
			<p class="p-1">
				支付方式
				<span>在线支付&nbsp;></span>
			</p>
			<p>
				红包
				<span>暂时只在饿了么 APP 中支持</span>
			</p>
			<div v-for="(item,index) in $store.state.orderList" :key="index">
				<div v-for="(i,index) in item.specfoods" :key="index">
					<p>
						<span class="span-1">{{item.name}}</span>
						<br />
						<span class="span-2">X{{item.__v}}</span>
					</p>
					<span class="span-3">￥{{i.price}}</span>
				</div>
			</div>
			<p id="pay-write">
				订单￥{{totalPrice}}
				<span>待支付￥{{totalPrice}}</span>
			</p>
			<div class="noted">
				<p>
					订单备注
					<span>口味、偏好等 ></span>
				</p>
				<p>
					发票抬头
					<span>不需要开发票 ></span>
				</p>
			</div>
		</div>
		<!-- 底部 -->
		<div class="last">
			<div class="last-left">
				<p>待支付 ￥{{totalPrice}}元</p>
			</div>
			<div class="last-right">
				<!--  /member/payment-->
				<div @click="god">确认下单</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	import headtop from "./zu/headtop.vue";
	import {
		mapState,
		mapGetters
	} from "vuex";
	export default {
		name: "confirmOrder",
		components: {
			headtop
		},
		data() {
			return {
				loading: true,
				type1: 1,
				shoplist: [],
				arr: this.$store.state.orderList
			};
		},
		created() {

			this.$http
				.post("http://elm.cangdu.org/v1/carts/checkout", {
					emulateJSON: true
				})
				.then(data => {
					// console.log(data);
				});
			console.log(this.$store.state.orderList);
		},
		computed: {
			...mapState(["orderList"]),
			...mapGetters(["totalPrice"]),
			btn() {
				return this.$store.state.dataj.name
			}
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 1000);
		},
		methods: {
			god() {
				this.$http.post('http://elm.cangdu.org/v1/users/44156/carts/111427/orders', {
					address_id: 15822,
					come_from: "mobile_web",
					deliver_time: "",
					description: "",
					entities: [this.arr],
					geohash: localStorage.geohash,
					paymethod_id: localStorage.shop_id,
					sig: parseInt(Math.random() * 1000),
				}).then((data) => {
					console.log(data.data)
				})

				Toast.loading({
					message: '加载中...',
					forbidClick: true,
					loadingType: 'spinner'
				});
				setTimeout(() => {
					location.href = `#/member/payment`
				}, 3000)
			}
		},
		watch: {
			btn: function(v) {
				console.log(v)
				if(v) {
					this.type1 = 2
				}
			}
		}
	};
</script>

<style scoped>
	.login_span {
		color: #fff;
	}

	.head_logo {
		margin-left: 40%;
		width: 100%;
		font-size: 30px;
		font-weight: bold;
	}

	.left {
		position: absolute;
		top: 17px;
		left: 5px;
		font-size: 40px;
		color: #fff;
		font-weight: bold;
	}

	.address {
		width: 100%;
		height: 150px;
		margin-top: 90px;
		padding-left: 30px;
		font-size: 26px;
		/* padding-top: 20px; */
		border-bottom: 5px dotted rgb(228, 217, 217);
	}

	.address p {
		float: left;
		line-height: 150px;
		font-size: 25px;
	}

	.arrow-right {
		float: right;
		margin-top: -10px;
	}

	.time {
		width: 100%;
		height: 180px;
		border-left: 8px solid #3190e8;
		box-sizing: border-box;
		overflow: hidden;
		border-top: 10px solid #ece5e5;
		border-bottom: 1px solid #ccc;
	}

	.time-left {
		width: 60%;
		float: left;
		padding-left: 30px;
		box-sizing: border-box;
	}

	.time-left h2 {
		line-height: 180px;
		font-size: 35px;
		color: #000;
		font-weight: bold;
	}

	.time-right {
		width: 40%;
		float: left;
		color: #333;
	}

	.time-right p {
		color: #3190e8;
		font-size: 25px;
		line-height: 50px;
		margin-top: 30px;
	}

	.only {
		width: 90px;
		height: 35px;
		background-color: #3190e8;
		color: #fff;
		text-align: center;
		line-height: 35px;
		border-radius: 7px;
		margin-left: 50%;
		margin-top: 10px;
	}

	.pay {
		height: 200px;
		border-top: 10px solid #ece5e5;
		border-bottom: 10px solid #ece5e5;
		padding: 20px;
	}

	.pay p {
		color: #666;
		font-size: 28px;
		margin: 30px 0;
		line-height: 40px;
	}

	.pay span {
		color: #aaa;
		font-size: 24px;
		float: right;
	}

	.pay .span-1 {
		width: 40%;
		height: 40px;
		line-height: 40px;
		float: left;
		overflow: hidden;
		box-sizing: border-box;
		color: #666;
	}

	.pay .span-2 {
		width: 60%;
		height: 40px;
		line-height: 40px;
		float: left;
		text-align: center;
		margin-top: -20px;
		box-sizing: border-box;
		color: #f60;
	}

	.pay .span-3 {
		width: 100%;
		height: 40px;
		line-height: 40px;
		float: right;
		margin-top: -48px;
		box-sizing: border-box;
		text-align: right;
		color: #666;
	}

	.noted {
		width: 100%;
		border-top: 10px #ece5e5 solid;
	}

	#pay-write {
		color: #666;
		line-height: 50px;
		margin-top: 20px;
	}

	#pay-write span {
		margin-top: 3px;
		color: #f60;
	}

	.last {
		width: 100%;
		height: 90px;
		background: #3c3c3c;
		position: fixed;
		bottom: 0;
		overflow: hidden;
	}

	.last-left {
		width: 60%;
		float: left;
		padding-left: 40px;
		box-sizing: border-box;
	}

	.last-left p {
		line-height: 90px;
		text-align: left;
		color: #fff;
		font-size: 30px;
	}

	.last-right {
		width: 40%;
		float: left;
	}

	.last-right div {
		width: 60%;
		height: 90px;
		color: #fff;
		background: #37ca72;
		border: none;
		float: right;
		font-size: 25px;
		text-align: center;
		line-height: 90px;
	}
</style>
