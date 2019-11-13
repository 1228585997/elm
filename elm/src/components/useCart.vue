<template>
	<div>
		<div class="usercart">
			<headtop>
				<template v-slot:useCart>
					<router-link to="/member">
						<van-icon name="arrow-left" class="arrow-left" />
					</router-link>
					<div class="title_head">
						<span class="title_text">兑换会员</span>
					</div>
				</template>
			</headtop>
			<div class="useCartbox">
				<div class="buy_for">
					成功兑换后将关联到当前帐号： <span class="userp">{{username}}</span>
				</div>
			</div>
			<div class="form_style">
				<input type="text" placeholder="请输入10位卡号" maxlength="10" class="cartNumber" v-model="cardnum">
				<input type="password" placeholder="请输入6位卡密" maxlength="10" class="cartNumber" v-model="cardpass">
			</div>
			<div class="determine">兑换</div>
			<div class="Binding">
				<h3>——温馨提示——</h3>
				<p>新兑换的会员服务，权益以「会员说明」为准。</p>
				<p>月卡：<span>30次</span>减免配送费。</p>
				<p>月卡：<span>90次</span>减免配送费。</p>
				<p>月卡：<span>360次</span>减免配送费。</p>
				<p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
			</div>
		</div>
	</div>
</template>

<script>
	import headtop from "./zu/headtop.vue";
	export default{
		name:'useCart',
		components:{
			headtop
		},
		data(){
			return{
				username:'',
				cardnum:'',
				cardpass:''
			}
		},
		created(){
			if(localStorage.username){
				this.username=JSON.parse(localStorage.username)
			}
		}
	}
</script>

<style scoped>
	.clearfix::after,.clearfix::before{
		content:'';
		display:table;
		clear:both;
	}
	.usercart{
		position:fixed;
		left: 0;
		top: 0;
		z-index:999;
		padding-top:100px;
	}
	.useCartbox{
		width: 100%;
		min-height:1000px;
		background:#F5F5F5;
		position:fixed;
	}
	.buy_for{
		font-size:24px;
		    color: #666;
		    line-height:40px;
		    padding-left:30px;
	}
	.userp{
		color:#333;
		font-size:24px;
		font-weight: 700;
	}
	.form_style{
		display: -ms-flexbox;
		    display: flex;
			
		    -ms-flex-direction: column;
		    flex-direction: column;
			margin-top:50px;
			position:fixed;
			z-index:90;
			width: 100%;
	}
	.form_style .cartNumber{
		border-bottom: 1px solid #ccc;
		    height:80px;
		    font-size:24px;
			background:#fff;
		    color: #999;
		    padding-left:20px;
	}
	.determine{
		margin-top:240px;
		position:relative;
		background-color: #ccc;
		color: #fff;
		text-align:center;
		    line-height:60px;
		    border-radius:5px;
		    font-weight: 700;
		width:600px;
		margin-left:15px;
	}
	.Binding{
		position: relative;
		margin-top:80px;
	}
	.Binding h3{
		text-align: center;
		    font-weight: 400;
		    font-size:24px;
		    color: #aaa;
		    margin-bottom:20px;
	}
	.Binding p{
		font-size:24px;
		    color: #aaa;
			padding-left:25px;
	}
</style>
