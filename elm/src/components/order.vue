<template>
	<div>
		<headtop>
			<template v-slot:order>
				<van-icon name="arrow-left" class="arrow-lefts1" size="20px" @click="$router.go(-1)" />
				<div class="title_head ellipsis">
					<span class="title_text">订单列表</span>
				</div>
			</template>
		</headtop>
		<div class="boxorder clearfix" v-if="arr">
			<ul class="clearfix orlist">
				<li v-for="(i,index) in arr">
					<div class="urlimg fl">
						<img :src="'//elm.cangdu.org/img/'+i.restaurant_image_url" alt="" class="img">
					</div>
					
					<div class="fl boxtext">{{i.restaurant_name}} <br><span style="font-size:12px;">{{i.basket.group[0][0].name}}</span></div><br>
					
					<div class="fl">
						{{i.formatted_created_at}}
						<span class="ospan">&yen{{i.total_amount}}</span>
					</div>
					<van-button plain type="info" class="van-button">待支付...</van-button>
				</li>
			</ul>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import footers from './zu/footers.vue'
	import headtop from "./zu/headtop.vue";
	export default {
		name: "order",
		components: {
			headtop,
			footers
		},
		data() {
			return {
				active: 2,
				arr: []
			};
		},
		mounted() {
			this.$http.get('http://elm.cangdu.org/bos/v2/users/44156/orders?limit=10&offset=0').then((data) => {
				this.arr = data.data
				console.log(data.data)
			})
		}
	};
</script>

<style scoped>
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

	.arrow-lefts1 {
		color: #fff;
		line-height: 80px;
		margin-left: 10px;
	}

	.fr {
		float: right;
	}

	.fl {
		float: left;
	}

	.boxorder {
		padding-top: 80px;
	}

	.orlist {
		max-height: 1000px;
		overflow: auto;
		box-sizing: border-box;
	}

	.orlist li {
		min-height: 200px;
		border-bottom: 1px #ccc solid;
		box-sizing: border-box;
	}

	.urlimg {
		width: 120px;
		height: 120px;
		padding: 10px;
		box-sizing: border-box;
	}

	.urlimg .img {
		width: 100%;
		height: 100%;
	}

	.boxtext {
		width: 500px;
		font-size: 30px;
		margin: 10px 0 0 0;
	}

	.ospan {
		margin-left: 240px;
		font-size: 24px;
		color: #f60;
		font-weight: 700;
	}

	.van-button {
		color: #fff !important;
		margin:10px 0 0 120px;
	}
</style>
