<template>
	<div class="container">
		<!-- 头部 -->
		<headtop>
			<template v-slot:shoplist>
				<van-icon name="search" class="search" />
				<div class="msite_title">
					<span class="title_text ellipsis">{{cityurl}}</span>
				</div>
				<div class="head_login">
					<span class="login_span">登录|注册</span>
				</div>
			</template>
		</headtop>
		<!-- 食品轮播图 -->
		<nav class="msite_nav clearfix">
			<van-swipe :loop="false">
				<van-swipe-item>
					<div class="item" v-for="item,index in listarr1" :key="index">
						<div class="clearfix item1">
							<img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="" class="img">
							<span class="item_title">{{item.title}}</span>
						</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="item" v-for="item,index in list_icon" :key="index">
						<div class="clearfix item1">
							<img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="" class="img">
							<span class="item_title">{{item.title}}</span>
						</div>
					</div>
				</van-swipe-item>
			</van-swipe>
		</nav>
		<!-- 食品分类列表 -->
		<div class="shop_list_container clearfix">
			<div class="shop_header clearfix">
				<van-icon name="shop-o" size="24px" class="shop-o" />
				<span class="shop_header_title">附近商家</span>
			</div>
			<!-- 数据食品分类列表 -->
			<div class="shop_list1_container clearfix">
				<ul class="clearfix">
					<li class="shop_li" v-for="item,index in shoplist" :key="index">
						<router-link :to="{name:'shop',params:{id:item.id}}">
							<div class="shopimg">
								<img :src="'//elm.cangdu.org/img/'+item.image_path" alt="暂无数据,非常抱歉" class="img">
							</div>
						</router-link>
						<router-link :to="{name:'shop',params:{id:item.id}}">
							<div class="shop_right">
								<header class="shop_right_header">
									<h4 class="shop_title ellipsis premium">
										<van-tag type="danger" size="medium" color="#ffd930">品牌</van-tag>
										<span class="shop_title_text">{{item.name}}</span>
									</h4>
									<ul class="shop_detail_ul">
										<li class="supports" v-for="i,index in item.supports" :key="i.id">
											{{i.icon_name}}
										</li>
									</ul>
								</header>
								<div class="shop_rightcenter">
									<div class="shop_rightcenterleft">
										<div class="rating_section">
											<van-rate v-model="value" :count="5" :size="10" :gutter="0" color="#ff9a0d"  readonly />
											<span class="rate">{{item.rating}}</span>
											<span class="dingdan">月售{{item.recent_order_num}}</span>
										</div>
									</div>
									<div class="shop_rightcenterright">
										<span class="delivery_style">{{item.delivery_mode.text}}</span>
										<span class="delivery_right">准时达</span>
									</div>
								</div>
								<div class="shop_rightbottom">
									<div class="fee">
										&yen{{item.float_minimum_order_amount}}元起送 /
										<span>{{item.piecewise_agent_fee.tips}}</span>
									</div>
									<div class="distance_time">
										<span class="distance_time1">{{item.distance}} / </span>
										<span class="order_time">{{item.order_lead_time}}</span>
									</div>
								</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- 尾部 -->
		<div class="footer">
			<router-view />
			<van-tabbar v-model="active" active-color="#3190e8" inactive-color="#000">
			  <van-tabbar-item icon="share" to="/shoplist/:id">外卖</van-tabbar-item>
			  <van-tabbar-item icon="search" to="/shopsearch">搜索</van-tabbar-item>
			  <van-tabbar-item icon="balance-list-o" to="/order">订单</van-tabbar-item>
			  <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	import headtop from './zu/headtop.vue'
	export default {
		name: 'shoplist',
		components:{
			headtop
		},
		data() {
			return {
				active: 0,
				value: 5,
				cityurl: '', //存放地址
				listarr: [],
				listarr1: '', //存放前8张图
				list_icon: '', //存放剩下的图
				geohash: '', //获取经纬度
				latitude: '', //纬度
				longitude: '', //经度
				shoplist: [] //存放商铺列表
			}
		},
		created() {
			//获取地址
			this.cityurl = this.$route.query.address
			console.log(this.cityurl)
			this.geohash=this.$route.query.geohash
			localStorage.geohash=JSON.stringify(this.geohash)
			//console.log(this.geohash)//获取经纬度
			console.log(this.$route.query)
			//获取经纬度
			// this.geohash = this.$route.query.geohash.split(',')
			// this.latitude = this.$route.query.geohash.split(',')[0]
			// this.longitude = this.$route.query.geohash.split(',')[1]
			console.log(this.latitude,this.longitude)
			// 食品分类列表
			this.$http.get(`https://elm.cangdu.org/v2/index_entry`).then((res) => {
				// console.log(res.data)
				this.listarr = res.data
				this.listarr1 = this.listarr.splice(0, 8)
				this.list_icon = res.data
				// console.log(res.data)
			})
			// 获取商铺列表
			this.$http.get('http://elm.cangdu.org/shopping/restaurants?latitude=32.035351&longitude=118.820363&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=', {
			}).then((data) => {
				console.log(data.data)
				this.shoplist = data.data
			})
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
	}

	.container {
		width: 100%;
		height: auto;
	}

	.clearfix::after,
	.clearfix::before {
		content: '';
		display: table;
		clear: both;
	}

	#head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 80px;
	}

	.span_el {
		font-size: 30px;
		color: #fff;
		padding: 0 20px;
		width: 80px;
		height: 80px;
		display: inline-block;
		line-height: 80px;
	}

	.msite_title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		color: #fff;
		text-align: center;
	}

	.title_text {
		font-size: 28px;
		color: #fff;
		text-align: center;
		display: block;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.head_login {
		right: 20px;
		font-size: 26px;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.login_span {
		color: #fff;
	}

	.msite_nav {
		padding-top: 80px;
		background-color: #fff;
		border-bottom: 1px solid #e4e4e4;
		height: 400px;
	}

	.item {
		width: 25%;
		min-height: 50px;
		float: left;
		padding: 10px 20px;
		box-sizing: border-box;
		text-align: center;
	}

	.item .img {
		width: 100px;
		height: 100px;
		display: inline-block;
		vertical-align: middle;
	}

	.item_title {
		text-align: center;
		font-size: 24px;
		width: 100px;
		height: 30px;
		display: inline-block;
		color: #666;
	}

	.van-swipe {
		min-height: 330px;
		color: #666;
		background: #fff;
		border-bottom: 1px solid #e4e4e4;
		box-sizing: border-box;
	}

	.search {
		display: inline-block;
		color: #fff;
		padding: 0 20px;
		font-size: 40px;
		line-height: 80px;
	}

	body,
	div,
	span,
	header,
	footer,
	nav,
	section,
	aside,
	article,
	ul,
	dl,
	dt,
	dd,
	li,
	a,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	i,
	b,
	textarea,
	button,
	input,
	select,
	figure,
	figcaption,
		{
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #333;
		font-weight: normal;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
	}

	.van-tabbar-item__icon i {
		font-size: 50px !important;
	}

	.shop_list_container {
		margin-top: 30px;
		border-top: 1px solid #e4e4e4;
		background-color: #fff;
	}

	.shop-o {
		color: #999;
		margin-left: 10px;
		vertical-align: middle;
		width: 20px;
		height: 80px;
		line-height: 80px;
		display: block;
		float: left;
	}

	.shop_header_title {
		color: #999;
		font-size: 22px;
		float: left;
		padding: 28px;
	}

	.shop_li {
		display: -ms-flexbox;
		display: flex;
		border-bottom: 1px solid #f1f1f1;
		padding: 20px 15px;
	}

	.shopimg {
		width: 100px;
		height: 100px;
		display: block;
		margin-right: 10px;
	}

	.shopimg .img {
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}

	.shop_right {
		ms-flex: auto;
		flex: auto;
	}

	.shop_right_header {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		align-items: center;
	}

	.shop_title {
		width: 300px;
		color: #333;
		font-size: 16px;
		font-weight: 700;

	}

	.van-tag {
		width: 50px !important;
		text-align: center;
		font-size: 16px;
		color: #333;
		font-weight: 500;
		margin-right: 10px;
	}

	.shop_title_text {
		font-size: 20px;
		font-weight: bold;
	}

	.shop_detail_ul {
		display: -ms-flexbox;
		display: flex;
		transform: scale(.8);
		margin-right: 10px;
	}

	.supports {
		font-size: 20px;
		color: #999;
		border: 1px solid #f1f1f1;
		border-radius: 5px;
		margin-left: 5px;
	}

	.shop_rightcenter {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		height: 40px;
		margin-top: 15px;
	}

	.shop_rightcenterleft {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: start;
		justify-content: flex-start;
	}

	.rating_section {
		display: flex;
		display: -ms-flexbox;
	}

	.rate {
		font-size: 14px;
		color: #ff6000;
		margin: 0 10px;
	}

	.dingdan {
		transform: scale(.8);
		margin: -2px 0 0 -5px;
		font-size: 16px;
		color: #333;
	}

	.shop_rightcenterright {
		isplay: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		transform: scale(.7);
		min-width: 200px;
		-ms-flex-pack: end;
		justify-content: flex-end;
		margin: -20px -30px 0 0;
	}

	.delivery_style {
		color: #fff;
		background-color: #3190e8;
		border: 1px solid #3190e8;
		font-size: 16px;
		padding: 0 10px;
		border-radius: 5px;
		margin-left: 5px;
	}

	.delivery_right {
		font-size: 16px;
		padding: 0 10px;
		border: 1px solid #3190e8;
		border-radius: 5px;
		margin-left: 5px;
		color: #3190e8;
	}

	.shop_rightbottom {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		font-size: 16px;
		color: #333;
	}

	.fee {
		width: 260px;
		transform: scale(.9);
		font-size: 16px;
		color: #666;
	}

	.distance_time {
		transform: scale(.9);
	}

	.distance_time1 {
		color: #999;
	}

	.order_time {
		color: #3190e8;
	}

	.van-tabbar {
		background-color: #fff;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height:100px;
		display: flex;
		box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, .1);
	}
</style>
