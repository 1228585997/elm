<template>
	<div>
		<headtop>
			<template v-slot:login>
				<van-icon name="arrow-left" class="login_back" @click="back"/>
				<span class="login_text">密码登录</span>
			</template>
		</headtop>
		<div class="login_inputs">
			<input type="text" placeholder="账号"/>
			<input type="text" placeholder="密码"/>
			<div style="display: flex;position: relative;">
				<input type="text" placeholder="验证码"/>
				<yz ></yz>
			</div>
			
		</div>
		<div class="login_p">
			<p>温馨提示：未注册过的账号，登录时将自动注册</p>
			<p>注册过的用户可凭账号密码登录</p>
		</div>
		<div class="login_in">
			登录
		</div>
		<router-link to="/forget" class="reset">重置密码？</router-link>
	</div>
</template>


<script>
	import headtop from "./zu/headtop.vue"
	import yz from "./zu/yz.vue"
	
	export default{
		components:{
			headtop,
			yz
		},
		methods:{
			back(){
				this.$router.back(1)
			}
		}
	}
</script>

<style>
 	.login_back{
 		color: #fff;
 		line-height: 80px;
 		font-size: 36px;
 	}
	.login_text{
		color: #fff;
 		line-height: 80px;
 		margin-left:35% ;
		font-size: 36px;
		font-weight: bolder;
	}
	.login_inputs{
		margin-top: 100px;
	}
	.login_inputs input{
		width: 100%;
		box-sizing: border-box;
		padding: 30px 25px;
		color: #333;
		border-bottom: 1px solid #f1f1f1;
		font-weight: 400;
		font-size: 22px;
	}
	.login_p {
		padding-left: 20px;
	}
	.login_p p{
		color: red;
		font-size: 12px;
		line-height: 40px;
	}
	.login_in{
		background-color: #4cd964;
		color: #fff;
		text-align: center;
		margin: 40px 16px;
		width: 95%;
		padding: 20px 0;
		border-radius: 5px;
		font-size: 25px;
	}
	.reset{
		    color: #3b95e9;
		    float: right;
		    margin-top: 30px;
		    font-size: 22px;
	}
</style>