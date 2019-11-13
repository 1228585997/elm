<template>
	<div>
		<headtop>
			<template v-slot:forget>
				<van-icon name="arrow-left" class="arrow-left"  @click="$router.go(-1)"/>
				<div class="title_head ellipsis clearfix">
					<span class="resize">重置密码</span>
				</div>
			</template>
		</headtop>
		<div class="loginForm clearfix">
			<div class="input_container">
				<input type="text" v-model="username" placeholder="账号">
			</div>
			<div class="input_container">
				<input type="password" v-model="oldpassword" placeholder="旧密码">
			</div>
			<div class="input_container">
				<input type="password" v-model="newpassword" placeholder="请输入新密码">
			</div>
			<div class="input_container">
				<input type="password" v-model="confirmpassword" placeholder="请确认密码">
			</div>
			<div class="input_container">
				<input type="text" v-model="model" placeholder="验证码" maxlength="4">
				<div class="img_change_img">
					<img :src="imgurl" alt="">
					<div class="change_img">
						<p>看不清</p>
						<p @click="random">换一张</p>
					</div>
				</div>
			</div>
		</div>
		<div class="login_container" @click="btn">
			确认修改
		</div>
	</div>
</template>

<script>
	import headtop from './zu/headtop.vue'
	export default{
		name:'forget',
		components:{
			headtop
		},
		data(){
			return{
				username:'',
				oldpassword:'',
				newpassword:'',
				confirmpassword:'',
				model:'',
				imgurl:''
			}
		},
		created(){
			this.random()
		},
		methods:{
			random() {
				this.$http.post('https://elm.cangdu.org/v1/captchas')
					.then(data => {
						this.imgurl = data.data.code
					})
			},
			btn(){
				if(this.username == '') {
					alert('请输入账号');
					return;
				} else if(this.oldpassword == '') {
					alert('请输入旧密码')
					return;
				} else if(this.newpassword == '') {
					alert('请输入新密码')
					return;
				} else if(this.confirmpassword==''){
					alert('请确认密码')
					return;
				}else if(this.model==''){
					alert('请输入验证码')
					return;
				}else{
					console.log('修改成功')
				}
			}
		}
	}
</script>

<style scoped>
	.resize{
		font-size: 30px;
		color: #fff;
	}
	.loginForm {
		padding-top: 100px;
	}
	.input_container {
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding: 25px 20px;
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
	}
	.img_change_img {
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.change_img {
		display: flex;
		-ms-flex-direction: "column";
		flex-direction: "column";
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		width: 70px;
		-ms-flex-pack: center;
		justify-content: center;
	}
	
	.change_img p:nth-of-type(1) {
		font-size: 20px;
		color: #666;
	}
	
	.change_img p:nth-of-type(2) {
		font-size: 20px;
		color: #3b95e9;
		margin-top: 5px;
	}
	.login_container{
		margin:40px 15px 35px;
		font-size: 24px;
		color: #fff;
		background-color: #4cd964;
		padding: 20px 0;
		border: 1px;
		border-radius: 10px;
		text-align: center;
	}
</style>
