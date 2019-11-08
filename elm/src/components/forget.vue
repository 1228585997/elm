<template>
	<div>
		<headtop>
			<template v-slot:forget>
				<van-icon name="arrow-left" class="login_back" @click="back"/>
				<span class="login_text">重置密码</span>
			</template>
		</headtop>
		<div class="login_inputs">
			<input type="text" placeholder="账号"/>
			<input type="text" placeholder="旧密码"/>
			<input type="text" placeholder="请输入新密码"/>
			<input type="text" placeholder="请确认密码"/>
			<div style="display: flex;position: relative;">
				<input type="text" placeholder="验证码"/>
				<yz ></yz>
			</div>
		</div>
		<div class="login_in">
			确认修改
		</div>
	</div>
</template>

<script>
	import headtop from "./zu/headtop.vue"
	import yz from "./zu/yz.vue"
	export default{
		components:{
			headtop,yz
		},
		methods:{
			back(){
				this.$router.back(1)
			}
		}
	}

</script>

<style>
	
</style>