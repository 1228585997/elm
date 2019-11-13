<template>
	<div>
		<headtop>
			<template v-slot:login>
				<router-link to="/">
					<van-icon name="arrow-left" class="arrow-left" />
				</router-link>
				<div class="title_head ellipsis clearfix">
					<span class="login_mi">密码登录</span>
				</div>
			</template>
		</headtop>
		<div class="loginForm clearfix">
			<div class="input_container">
				<input type="text" v-model="username" placeholder="账号">
			</div>
			<div class="input_container">
				<input type="password" v-model="password" placeholder="密码" ref="item">
				<van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
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
		<div class="login_tips clearfix">
			温馨提示：未注册过的账号，登录时将自动注册
		</div>
		<div class="login_tips clearfix">
			注册过的用户可凭账号密码登录
		</div>
		<div class="login_container" @click="login">
			登录
		</div>
		<router-link to="/forget">
			<div class="to_forget">
				重置密码？
			</div>
		</router-link>
	</div>
</template>

<script>
	import headtop from './zu/headtop.vue'
	export default {
		name: 'login',
		components: {
			headtop
		},
		data() {
			return {
				username: '',
				password: '',
				checked: false,
				model: '',
				imgurl: ''
			}
		},
		watch: {
			checked(v) {
				if (v == false) {
					this.$refs.item.type = 'password'
				} else if (v == true) {
					this.$refs.item.type = 'text'
				}
				console.log(v)
			}
		},
		created() {
			this.random()
		},
		methods: {
			random() {
				this.$http.post('https://elm.cangdu.org/v1/captchas')
					.then(data => {
						this.imgurl = data.data.code
					})
			},
			login(){
				if(this.username == '') {
					alert('请输入账号');
					return;
				} else if(this.password == '') {
					alert('请输入密码')
					return;
				} else if(this.model == '') {
					alert('请输入验证码')
					return;
				} else{
					this.$http.post('https://elm.cangdu.org/v2/login', {
						username: this.username,
						password: this.password ,
						captcha_code: this.model
					},{emulateJSON:true}).then((data)=>{
						console.log(data)
						if(data.data.message == '密码错误') {
							alert('登录失败');
						} else if(data.data.message == '验证码不正确') {
							alert('验证码错误');
						}else{
							console.log('成功了')
							localStorage.username =this.username
							localStorage.index =1
							location.href=`#/profile`
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.login_mi {
		font-size: 30px;
		color: #fff;
	}

	.loginForm {
		padding-top: 100px;
	}

	.clearfix:after,
	.clearfix:before {
		content: '';
		display: table;
		clear: both;
	}

	.input_container {
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding: 25px 20px;
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
	}

	.input_container:nth-of-type(3) {
		padding: 14px;
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

	.login_tips {
		font-size: 20px;
		color: red;
		padding: 10px 20px;
	}

	.login_container {
		margin: 10px 15px 35px;
		font-size: 24px;
		color: #fff;
		background-color: #4cd964;
		padding: 20px 0;
		border: 1px;
		border-radius: 10px;
		text-align: center;
	}

	.to_forget {
		float: right;
		font-size: 24px;
		color: #3b95e9;
		margin-right: 15px;
	}
</style>
