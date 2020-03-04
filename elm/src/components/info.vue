<template>
	<div>
		<headtop>
			<template v-slot:info>
				<router-link to="/profile">
					<van-icon name="arrow-left" class="arrow-left"/>
				</router-link>
				<div class="title_head ellipsis clearfix">
					账户信息
				</div>
			</template>
		</headtop>
		<div class="boxicon">
			<div class="headportrait">
				<h2>头像</h2>
				<van-uploader
				  v-model="fileList"
				  multiple
				  :max-count="1"
				  class="uploader"
				/>
				<van-icon name="arrow" size="20px" class="infoarrow"/>
			</div>
			<div class="headportraitwo">
				<h2>用户名</h2>
				<div class="username">{{username}}</div>
				<router-link to="/profile/info/setusername">
					<van-icon name="arrow" size="20px" class="infoarrow"/>
				</router-link>
			</div>
			<div class="headportraitwo">
				<h2>收货地址</h2>
				<router-link to="/profile/info/address">
					<van-icon name="arrow" size="20px" class="infoarrow"/>
				</router-link>
			</div>
			<div class="bind-phone">
				账号绑定
			</div>
			<div class="headportraitwo">
				<img src="data:image/png;base64,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" alt="">
				<h2 class="phone">手机</h2>
				<van-icon name="arrow" size="20px" class="infoarrow" @click="phone"/>
			</div>
			<div class="bind-phone">
			安全设置
            安全设置
			</div>
			<div class="headportraitwo">
				<h2>登录密码</h2>
				<div class="xiugai">修改</div>
				<router-link to="/forget">
					<van-icon name="arrow" size="20px" class="infoarrow"/>
				</router-link>
			</div>
			<div class="exitlogin" @click="exit">退出登录</div>
			<transition name="router-slid" mode="out-in">
			    <router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	import headtop from './zu/headtop.vue'
	export default{
		name:'info',
		components:{
			headtop
		},
		data(){
			return{
				fileList:[],
				username:''
			}
		},
		created(){
			if(this.username){
				this.username=JSON.parse(localStorage.username)
			}
		},
		watch:{
			fileList(a){
				console.log(a)
				localStorage.urlimg=JSON.stringify(a[0].content)
			}
		},
		methods:{
			phone(){
				Dialog.alert({
				  title: '提示',
				  message: '请在手机APP中设置',
				}).then(() => {
				  // on close
				});

			},
			exit(){
				Dialog.confirm({
				  title: '标题',
				  message: '是否退出登录'
				}).then((v) => {
					location.href=`#/profile`
					localStorage.username=''
				}).catch(() => {
				  console.log('取消了')
				});
			},
			img(v){
				console.log(v)
			}
		}
	}
</script>

<style scoped>
	.boxicon{
		position:fixed;
		left: 0;
		top:0;
		width: 100%;
		box-sizing: border-box;
		margin-top:100px;
		min-height:800px;
		background:#f2f2f2;
		z-index:101;
	}
	.headportrait{
		margin-top:20px;
		padding:15px;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		    -ms-flex-align: center;
		    align-items: center;
		    border-bottom: 1px solid #ddd;
		    background: #fff;
	}
	.headportrait h2{
		font-weight:normal;
		font-size:24px;
		    color: #333;
		    font-weight: 500;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-align: center;
		    align-items: center;
			
	}
	.headportraitwo{
		display: -ms-flexbox;
		display: flex;
		padding:25px 20px;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		align-items: center;
		border-bottom: 1px solid #ddd;
		background: #fff;
	}
	.headportraitwo h2{
		font-weight:normal;
		font-size:21px;
		    color: #333;
		    font-weight: 500;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-align: center;
		    align-items: center;
	}
	.fr{
		float: right;
	}
	.fl{
		float: right;
	}
	.infoarrow{
		color: rgb(216, 216, 216);
	}
	.uploader{
		position:relative;
		left:210px;
		top:5px;
	}
	.username{
		margin-left:440px;
	}
	.bind-phone{
		padding:15px;
		    font-size:18px;
		    color: #666;
	}
	.phone{
		margin-left:-460px;
	}
	.xiugai{
		margin-left:420px;
		font-size:24px;
		    color: #999;
		    font-weight: 100;
		    font-family: Arial;
	}
	.exitlogin{
		width: 96%;
		    margin:80px auto 0;
		    line-height:60px;
		    border-radius: 5px;
		    text-align: center;
		    background: #d8584a;
		    font-size:24px;
		    color: #fff;
	}
	.router-slid-enter-active, .router-slid-leave-active {
	    transition: all .4s;
	}
	.router-slid-enter, .router-slid-leave-active {
	    transform: translate3d(2rem, 0, 0);
	    opacity: 0;
	}
</style>
