<template>
	<div class="city_container" v-loading="loading">
		<!-- 头部 -->
		<headtop>
			<template v-slot:citytop>
				<router-link to="/">
					<van-icon name="arrow-left" class="arrow-left" />
				</router-link>
				<section class="title_head ellipsis">
					<span class="title_text">{{$route.params.type}}</span>
				</section>
				<router-link to="/">
					<span class="change_city">切换城市</span>
				</router-link>
			</template>
		</headtop>
		<!-- 搜索 -->
		<form action="" class="city_form">
			<div class="citysearch">
				<input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" v-model.trim="inputVaule"
				 @keyup.enter="onsearch()">
			</div>
			<div class="citysearch">
				<div class="submit city_submit" @click="onsearch">提交</div>
			</div>
		</form>
		<header v-if="historytitle" class="pois_search_history">搜索历史</header>
		<ul class="citylist_ul clearfix">
			<li v-for="(item, index) in citylist" :key="index" @click='nextpage(item,index,item.geohash)'>
				<h4 class="pois_name ellipsis">
					<router-link :to="{name:'shoplist',query:{address:item.address,geohash:item.geohash}}">
						{{item.name}}
					</router-link>
				</h4>
				<p class="pois_address ellipsis">
					<router-link :to="{name:'shoplist',query:{address:item.address,geohash:item.geohash}}" tag="span">
						{{item.address}}
					</router-link>
				</p>
			</li>
		</ul>
		<!-- 历史记录 -->
		<ul class="getpois_ul citylist_ul clearfix" v-if="listplaceHistory">
			<li v-for="item,index in listplaceHistory">
				<h4 class="pois_name ellipsis">
					<router-link :to="{name:'shoplist',query:{latitude:item.latitude,longitude:item.longitude,name:item.address}}">
						{{item.name}}
					</router-link>
				</h4>
				<p class="pois_address ellipsis">
					<router-link :to="{name:'shoplist',query:{address:item.address,geohash:item.geohash}}" tag="span">
						{{item.address}}
					</router-link>
				</p>
			</li>
		</ul>
		<!-- 清空所有 -->
		<footer v-if="historytitle&&citylist.length" class="clear_all_history" @click="clearAll">
			清空所有</footer>
		<div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
	</div>
</template>
<script>
	import headtop from './zu/headtop.vue'
	export default {
		name: 'city',
		components: {
			headtop
		},
		data() {
			return {
				loading: true,
				inputVaule: '', // 搜索地址
				historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
				citylist: [], // 搜索城市列表
				placeHistory: [], // 历史搜索记录
				placeNone: false, // 搜索无结果，显示提示信息
				listplaceHistory: [], //获取历史记录
				id: '' //记录城市的id
			}
		},
		//获取城市名字
		created() {
			this.id = this.$route.params.id
			if (localStorage.placeHistory) {
				this.listplaceHistory = JSON.parse(localStorage.placeHistory)
				//console.log(this.listplaceHistory)
			}
		},
		methods: {
			//城市搜索
			onsearch() {
				this.$http.get(`https://elm.cangdu.org/v1/pois?city_id=${this.id}&keyword=${this.inputVaule}&type=search`).then((
					data) => {
					console.log(data.data)
					if (this.inputVaule == '') {
						alert('请填写次字段')
						return
					}
					this.citylist = data.data
					this.historytitle = false
				})
			},
			// 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
			// 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
			nextpage(item, index, geohash) {
				console.log(item, index, geohash)
				this.placeHistory.push(item)
				//console.log(this.placeHistory)
				localStorage.placeHistory = JSON.stringify(this.placeHistory)
				this.inputVaule = ''
			},
			//清空所有
			clearAll() {
				remove('placeHistory')
			}
		},
		mounted() {
		  setTimeout(() => {
		    this.loading = false;
		  }, 1000);
		}
	}
</script>
<style>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		font-style: normal;
		text-decoration: none;
		border: none;
		color: #333;
		font-weight: normal;
		font-family: "Microsoft Yahei";
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
	}

	body,
	html {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
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

	.arrow-left {
		font-size: 40px;
		color: #fff;
		line-height: 80px;
		padding: 0 10px;
	}

	span {
		color: #999;
	}

	.title_head {
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
		font-weight: 700;
	}

	.change_city {
		right: 20px;
		font-size: 24px;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.city_form {
		background-color: #fff;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		padding-top: 80px;
	}

	.city_form .citysearch {
		width: 90%;
		margin: 0 auto;
		text-align: center;
	}

	.city_input {
		border: 1px solid #e4e4e4;
		padding: 0 20px;
		font-size: 20px;
		margin-top: 20px;
		color: #333;
	}

	.input_style {
		border-radius: 5px;
		margin-bottom: 20px;
		width: 100%;
		height: 55px;
	}
	/* 设置input框字体大小 */
	input::-webkit-input-placeholder {
		font-size: 24px;
	}

	.citysearch .city_submit {
		background-color: #3190e8;
		font-size: 24px;
		color: #fff;
	}

	.citysearch .submit {
		border-radius: 5px;
		margin-bottom: 20px;
		width: 100%;
		height: 55px;
		line-height: 55px;
	}

	.pois_search_history {
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		padding-left: 20px;
		font-size: 20px;
		height: 35px;
		line-height: 35px;
	}

	.citylist_ul {
		background-color: #fff;
		border-top: 1px solid #e4e4e4
	}

	.citylist_ul li {
		margin: 0 auto;
		padding-top: 20px;
		border-bottom: 1px solid #e4e4e4;
	}

	.pois_name {
		margin: 0 auto 12px;
		width: 90%;
		font-size: 24px;
		color: #333;
	}

	.pois_address {
		width: 90%;
		margin: 0 auto 25px;
		font-size: 20px;
		color: #999;
	}

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.getpois_ul {
		background-color: #fff;
		border-top: 1px solid #e4e4e4;
	}

	.getpois_ul li {
		margin: 0 auto;
		padding-top: 20px;
		border-bottom: 1px solid #e4e4e4;
	}
</style>
