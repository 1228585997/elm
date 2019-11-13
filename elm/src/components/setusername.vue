<template>
	<div>
		<headtop>
			<template v-slot:setusername>
				<router-link to="/profile/info">
					<van-icon name="arrow-left" class="arrow-lefts" size="18px"/>
				</router-link>
				<div class="title_head ellipsis clearfix title_head3">
					修改用户名
				</div>
			</template>
		</headtop>
		<div class="setname">
			<div class="setname-top">
				<input type="text" placeholder="输入用户名" v-model="user">
			</div>
			<div class="xugai">用户名只能修改一次（5-24字符之间）</div>
		</div>
		<div class="reset" @click="reset">确认修改</div>
	</div>
</template>

<script>
	import headtop from "./zu/headtop.vue";
	export default{
		name:'setusername',
		components:{
			headtop
		},
		data(){
			return{
				user:''
			}
		},
		methods:{
			reset(){
				localStorage.username=this.user
				console.log(this.user)
			}
		}
	}
</script>

<style scoped>
	.title_head3{
		font-size:30px;
		color:#fff;
	}
	.setname{
		width:100%;
		min-height:1000px;
		position:fixed;
		background:#F2F2F2;
		left: 0;
		top:0;
		box-sizing: border-box;
		padding-top:100px;
	}
	.setname-top input{
		background: none;
		    width:90%;
		    border: 1px solid #ddd;
		    border-radius: 2px;
		    padding:15px 10px;
		    line-height:40px;
		    font-size:20px;
		    display: block;
			margin:0 auto;
	}
	.xugai{
		width: 100%;
		    font-size:14px;
		    color: #666;
		    padding:10px 25px;
	}
	.reset{
			display: block;
		    width:90%;
			text-align:center;
		    background:#3190e8;
		    line-height:60px;
		    font-size:20px;
		    color: #fff;
		    opacity: .6;
			position:relative;
			top: -600px;
			left: 20px;
		    transition: all 1s;
	}
</style>
