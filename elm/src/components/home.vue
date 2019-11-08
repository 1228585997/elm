<template>
	<div>
		<div class="container">
			<headtop>
				<template v-slot:home>
					<span class="head_logo" @click="reload">ele.me</span>
					<span class="head_login">
						<span class="login_span">登录|注册</span>
					</span>
				</template>
			</headtop>
			<!-- 导航 -->
			<nav class="city_nav clearfix">
				<div class="city_tip">
					<span>当前定位城市:</span>
					<span>定位不准时,请在城市列表中选择</span>
				</div>
				<!-- 定位城市 -->
				<div class="guess_city clearfix">
					<span class="cityspan" v-if="poscity">{{poscity}}</span>
					<van-icon name="arrow" class="arrow" size="20px" />
				</div>
			</nav>
			<!-- 热门城市列表-->
			<div class="hot_city_container">
				<h4 class="city_title">热门城市</h4>
				<ul class="hot_citylist clearfix">
					<li v-for="item,index in hotcity" :key="item.id">
						<router-link :to="{name:'city',params:{id:item.id,type:item.name}}" tag="a">
							{{item.name}}
						</router-link>
					</li>
				</ul>
			</div>
			<!-- 所有城市列表 -->
			<div class="allcity clearfix">
				<ul class="letter_classify clearfix">
					<li class="letter_classify_li ellipsis" v-for="(value, key, index) in sortcity" :key="key">
						<h4 class="city_title">{{key}}
							<span v-if="index == 0">（按字母排序）</span>
						</h4>
						<ul class="groupcity_name_container citylistul clearfix">
							<li v-for="item in value" :key="item.id" class="ellipsis">
								<router-link :to="{name:'city',params:{id:item.id,type:item.name}}" tag="span">
									{{item.name}}
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import headtop from './zu/headtop.vue'
	export default {
		name: 'home',
		components: {
			headtop
		},
		data() {
			return {
				hotcity: '', //获取热门城市列表
				arrcity: '', // 2.获取所选城市信息
				poscity: '' //定位城市
			}
		},
		created() {
			//1. 获取热门城市列表
			this.$http.get('https://elm.cangdu.org/v1/cities', {
				params: {
					type: 'hot',
				}
			}).then((data) => {
				console.log(data.data)
				this.hotcity = data.data
			})
			// 2.获取所选城市信息
			this.$http.get('https://elm.cangdu.org/v1/cities', {
				params: {
					type: 'group',
				}
			}).then((res) => {
				console.log(res.data)
				this.arrcity = res.data
			})
			//3.获取定位城市列表
			this.$http.get(`http://elm.cangdu.org/v1/cities?type=guess`).then((data) => {
				console.log(data.data)
				this.poscity = data.data.name
			})
		},
		methods: {
			//点击图标刷新页面
			reload() {
				window.location.reload();
			}
		},
		computed: {
			//将获取的数据按照A-Z字母开头排序
			sortcity() {
				let sortobj = {};
				for (let i = 65; i <= 90; i++) {
					if (this.arrcity[String.fromCharCode(i)]) {
						sortobj[String.fromCharCode(i)] = this.arrcity[String.fromCharCode(i)];
					}
				}
				return sortobj
			}
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

	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.container {
		width: 100%;
		height: auto;
		background-color: #f5f5f5 !important;
	}

	body,
	html {
		height: 100%;
		width: 100%;
		background-color: #f5f5f5 !important;
	}

	.arrow {
		color: #999;
	}

	.city_nav {
		padding-top: 80px;
		border-top: 1px solid #e4e4e4;
		background-color: #fff;
		margin-bottom: 20px;
	}

	.city_tip {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		line-height: 60px;
		padding: 0 20px;
	}

	.city_nav .city_tip span:first-of-type {
		font-size: 22px;
		color: #666;
	}

	.city_nav .city_tip span:nth-of-type(2) {
		font-weight: 900;
		font-size: 20px;
		color: #9f9f9f;
	}

	.city_nav .guess_city {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		align-items: center;
		height: 60px;
		padding: 0 20px;
		border-top: 1px solid #e4e4e4;
		border-bottom: 4px solid #e4e4e4;
	}

	.guess_city .cityspan {
		color: #3190e8;
		font-size: 26px;
	}

	.hot_city_container {
		background-color: #fff;
		margin-bottom: 20px;
	}

	.city_title {
		color: #666;
		font-weight: 400;
		text-indent: 20px;
		border-top: 2px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		line-height: 60px;
		font-size: 22px;
	}

	.city_title span {
		font-size: 16px;
		color: #999;
	}

	.hot_citylist li {
		display: inline-block;
		text-align: center;
		color: #3190e8;
		border-bottom: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		width: 25%;
		height: 70px;
		font-size: 24px;
		line-height: 70px;
	}

	.hot_citylist li a {
		color: #3190e8;
	}

	.letter_classify .letter_classify_li {
		margin-bottom: 20px;
		background-color: #fff;
		border-bottom: 1px solid #e4e4e4;
	}

	.groupcity_name_container li {
		color: #666;
	}

	.citylistul li {
		float: left;
		text-align: center !important;
		border-bottom: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
		width: 25%;
		height: 70px;
		font-size: 24px;
		line-height: 70px;
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

	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
		background-color: #F5F5F5;
	}

	/*定义滚动条轨道 内阴影+圆角*/
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	/*定义滑块 内阴影+圆角*/
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
		background-color: #555;
	}

	input[type="button"],
	input[type="submit"],
	input[type="search"],
	input[type="reset"] {
		-webkit-appearance: none;
	}

	textarea {
		-webkit-appearance: none;
	}
</style>
