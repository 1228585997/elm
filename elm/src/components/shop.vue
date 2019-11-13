<template>
	<div>
		<div class="content">
			<div class="content-header" v-if="shop">
				<router-link to="/shoplist/:id">
					<van-icon name="arrow-left" class="left" />
				</router-link>
				<div class="content-header-left">
					<img :src="'//elm.cangdu.org/img/'+shop.image_path" alt class="img" />
				</div>
				<div class="content-header-right">
					<h3>{{shop.name}}</h3>
					<p>商家配送 / 分钟送达 / {{shop.piecewise_agent_fee.tips}}</p>
					<p>公告：{{shop.promotion_info}}</p>
					<router-link to="/shoplist/:id">
						<van-icon name="arrow" />
					</router-link>
				</div>
			</div>
			<div class="content-text">
				<div class="content-tab">
					<van-tabs v-model="active" class="tab">
						<van-tab title="商品">
							<div v-if="shop_sort" class="tab-left">
								<div v-for="(i,index) in shop_sort" :key="index" @click="type=index" :class="type==index?'active':''">{{i.name}}</div>
							</div>
							<div class="tab-right">
								<div v-if="shop_sort">
									<div v-for="(i,index) in shop_sort" :key="index" v-show="index==type">
										<div class="right-top">
											<h3>
												{{i.name}}
												<span>{{i.description}}</span>
											</h3>
										</div>
										<div v-for="(j,index) in i.foods" :key="index" class="foods-content">
											<div class="foods-left">
												<img :src="'//elm.cangdu.org/img/'+j.image_path" />
											</div>
											<div class="foods-right">
												<h3>{{j.name}}</h3>
												<p>{{j.description}}</p>
												<h5>{{j.tips?j.tips:''}}</h5>
												<h4>
													￥
													<span class="pri">{{j.specfoods[0]?j.specfoods[0].price:''}}</span>
													<span class="qi">起</span>
												</h4>
												<div class="boxnumber">
													<number v-model="j.__v"></number>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div style="width:100%;height:60px;background-color: #3d3d3f;position:fixed;bottom:0;">
									<div style="width:60%;float:left;">
										<p style="line-height:60px;text-align: center;color:#fff;font-size:25px;">总价：{{totalPrice}}元</p>
							
									</div>
									<div style="width:40%;float:left">
										<router-link to="/confirmOrder">
											<button style="width:60%;height:60px;color:#fff;background:#37ca72;border:none;float:right;">去结算</button>
										</router-link>
										
									</div>
								</div>
							</div>
						</van-tab>
						<van-tab title="评价">
							<div class="pj clearfix">
								<ul class="pjleft clearfix">
									<li>4.7</li>
									<li>综合评价</li>
									<li>高于周边商家76.9%</li>
								</ul>
								<ul class="pjright clearfix">
									<li>
										<div class="pjtext">
											<div class="servepj">服务态度</div>
											<van-rate v-model="value" readonly color="#ff9a0d" classs="van-rate"/>
											<span class="rate">4.7</span>
										</div>
									</li>
									<li>
										<div class="pjtext">
											<div class="servepj">菜品评价</div>
											<van-rate v-model="value" readonly color="#ff9a0d" classs="van-rate"/>
											<span class="rate">4.8</span>
										</div>
									</li>
									<li>
										<div class="pjtext">
											<div class="servepj">送达时间</div>
											<span class="mimit">分钟</span>
										</div>
									</li>
								</ul>
							</div>
							<div class="pjcontenbox">
								<ul class="listarr clearfix">
									<li v-for="(item,$index) in listarr" :key="item._id" @click="z_index=$index" :class="z_index==$index?'active1':''">
										{{item.name}}
									</li>
								</ul>
							</div>
							<div class="userp" v-for="item in arr">
								<ul class="userplist clearfix">
									<li>
										{{item.username}}
									</li>
									<li>
										{{item.time_spent_desc}}
									</li>
									<li>{{item.rated_at}}</li>
								</ul>
							</div>
						</van-tab>
					</van-tabs>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import headtop from "./zu/headtop.vue";
	import number from "./zu/number.vue";
	import {
		mapState,
		mapGetters
	} from "vuex";
	export default {
		name: "shop",
		components: {
			headtop,
			number
		},
		data() {
			return {
				active: 0, //tab切换
				shop_id: "", //传过来的id
				shop: "",
				shop_sort: "",
				type: 0 ,//判断
				value:5, //星星
				listarr:[] ,//评价
				arr:[],//用户
				z_index:0
			};
		},
		watch: {
			shop_sort: {
				handler(v1) {
					this.arr = [];
					v1.forEach(el => {
						el.foods.forEach(item => {
							if (item.__v) {
								this.arr.push(item)
								console.log(this.arr)
							}

						})
					});
					this.$store.commit("addOrder", this.arr);
				},
				deep: true
			}
		},
		computed: {
			...mapState(["orderList"]),
			...mapGetters(["totalPrice"])
		},
		created() {
			console.log(this.$route.params.id);
			this.shop_id = this.$route.params.id;
			this.getshop();
			this.details_shop();
			//评价
			this.$http.get(`http://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags`).then((res) => {
				//console.log(res.data)
				this.listarr=res.data
			})
			//用户评价
			this.$http.get(`http://elm.cangdu.org/ugc/v2/restaurants/1/ratings?has_content=true&offset=0&limit=10&tag_name=`).then((data)=>{
				console.log(data.data)
				this.arr=data.data
			})
		},
		methods: {
			// 头部数据
			getshop() {
				this.$http
					.get(
						`http://elm.cangdu.org/shopping/restaurant/${this.shop_id}?latitude=32.69174&longitude=109.05076&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics`
					)
					.then(data => {
						console.log(data.data);
						this.shop = data.data;
					});
			},
			// 详细数据
			details_shop() {
				this.$http
					.get(
						`http://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.shop_id}`
					)
					.then(data => {
						console.log(data.data);
						this.shop_sort = data.data.slice(0, 7);
						console.log(this.shop_sort);
					});
			},
			onSubmit() {

			}
			// addItem(item, ev) {
			//   if (item.num) {
			//     item.num = ev;
			//   } else {
			//     this.$set(item, "num", ev);
			//   }
			// }
		}
	};
</script>

<style scoped>
	.content {
		width: 100%;
		height: auto;
		position: relative;
	}

	.content-header {
		width: 100%;
		height: 155px;
		padding: 17px;
		background: #b0b0c2;
		position: fixed;
		top: 0px;
		z-index: 999;
	}
	.userp{
		background:#ffffff;
		min-height:300px;
		box-sizing: border-box;
		padding:20px 15px 25px 20px;
	}
	.userplist li{
		display:flex;
		min-height: 300px;
		border-bottom:3px #F2F2F2 solid;
	}
	.left {
		position: absolute;
		top: 5px;
		left: 5px;
		font-size: 40px;
		color: #fff;
		font-weight: bold;
	}
	.active1{
		background:#3190e8 !important;
		color:#fff !important;
	}
.servepj{
	margin:8px 18px 0 0;
}
.van-rate{
	margin-top:10px;
}
.listarr{
	width: 100%;
}
.fl{
	float: left;
}
.listarr li{
	width: 125px;
	height: 50px;
	background:#ebf5ff;
	line-height:50px;
	text-align:center;
	font-size:24px;
	color:#919ca8;
	float:left;
	border-radius:10px;
	margin:0 15px 10px 0;
}
.rate{
	display:inline-block;
	font-size:14px;
}
	.header {
		background: #f5f5f5;
	}
	#head_top {
		background: #f5f5f5;
	}

	.van-tabbar {
		background-color: #fff;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100px;
		display: flex;
		box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
	}
	.pjcontenbox{
		background:#fff;
		min-height:180px;
		margin-top:18px;
		box-sizing: border-box;
		padding:18px 60px 10px 20px;
		border-bottom:3px #f2f2f2 solid;
	}
	.mimit{
		font-size:16px;
		color:#a5a5a5;
		display:inline-block;
		margin-top:8px;
	}
	.arrow-lefts1 {
		color: #fff;
		line-height: 80px;
		margin-left: 10px;
	}

	.content-header-left {
		width: 23%;
		float: left;
	}
	.pjright li .pjtext{
		font-size:22px;
		color:#8c8c8c;
		line-height:30px;
		display:flex;
	}
	.pj {
		display: flex;
		padding: 40px 70px;
		text-align: center;
		background: #fff;
		box-sizing: border-box;
		border-top: 5px #f0f0f0 solid;
	}
	.pjleft{
		margin-right:55px;
	}
	.pjleft li:nth-of-type(1) {
		font-size: 43px;
		color: #ff6600;
		line-height: 50px;
	}

	.pjleft li:nth-of-type(2) {
		font-size: 22px;
		color: #8f8f8f;
	}

	.pjleft li:nth-of-type(3) {
		font-size: 15px;
		color: #bbbbbb;
	}

	.content-header-left .img {
		width: 120px;
		height: 120px;
	}

	.content-header-right {
		width: 70%;
		float: left;
		position: relative;
	}

	.content-header-right h3 {
		color: #fff;
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 8px;
	}

	.content-header-right p {
		color: #fff;
		font-size: 20px;
		line-height: 35px;
	}

	.van-icon-arrow:before {
		width: 30px;
		height: 30px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		position: absolute;
		top: -100px;
		margin-left: 400px;
	}

	.content-text {
		width: 100%;
		height: auto;
		padding-top: 6px;
		position: absolute;
		top: 155px;
	}

	.li {
		float: left;
		width: 50%;
		height: 60px;
		text-align: center;
		line-height: 60px;
	}

	.tab-left {
		width: 20%;
		text-align: center;
		line-height: 100px;
		background: #ededed;
		font-size: 20px;
		color: #666;
		position: fixed;
		top: 200px;
		left: 0;
	}

	.active {
		background: #fff;
		box-sizing: border-box;
		border-left: 8px #0073ff solid;
	}

	.tab-right {
		width: 80%;
		float: right;
		background: #fff;
	}

	.right-top {
		width: 100%;
		height: 80px;
		padding: 15px;
		line-height: 80px;
		background: #ededed;
	}

	.right-top h3 {
		font-size: 30px;
		color: #666;
		font-weight: 700;
	}

	.right-top span {
		font-size: 22px;
		color: #999;
		width: 30%;
		overflow: hidden;
	}

	.foods-content {
		overflow: hidden;
		min-height: 200px;
		padding: 20px;
	}

	.foods-left {
		width: 25%;
		float: left;
	}

	.foods-left img {
		width: 85%;
		height: 100px;
	}

	.foods-right {
		width: 75%;
		float: left;
	}

	.foods-right h3 {
		font-size: 30px;
		color: #333;
	}

	.foods-right p {
		color: #999;
		font-size: 20px;
		line-height: 45px;
	}

	.foods-right h5 {
		color: #333;
		font-size: 20px;
	}

	.foods-right h4 {
		font-size: 20px;
		color: #f60;
		margin-right: 0.05rem;
	}

	.foods-right .pri {
		font-size: 35px;
		color: #f60;
		font-weight: 700;
		margin-right: 0.1rem;
	}

	.foods-right .qi {
		font-size: 22px;
		color: #666;
	}

	.boxnumber {
		position: relative;
		left: 240px;
		top: -35px;
	}
</style>
