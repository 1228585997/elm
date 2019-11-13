<template>
	<div>
		<div class="box">
			<headtop>
				<template v-slot:add>
					<router-link to="/profile/info/address">
						<van-icon name="arrow-left" class="arrowaddd" size="20px" />
					</router-link>
					<div class="title_head ellipsis clearfix">
						<span class="login_mi hdi">新增地址</span>
					</div>
				</template>
			</headtop>
			<div class="addbox">
				<div class="addboxlist">
					<div class="input-new">
						<input type="text" placeholder="请填写你的姓名" class="input" v-model="name">
					</div>
					<div class="input-new">
						<router-link to="/profile/info/address/add/addDetail">
								<input type="text" placeholder="小区/写字楼/学校等" class="input" readonly="readonly" v-model="url" ref="itemh">
						</router-link>		
					</div>
					<div class="input-new">
						<input type="text" placeholder="请填写详细送餐地址" class="input" v-model="texturl">
					</div>
					<div class="input-new">
						<input type="text" placeholder="请填写能够联系到您的手机号" class="input" v-model="myphone">
					</div>
					<div class="input-new">
						<input type="number" placeholder="备用联系电话（选填）" class="input" v-model="hphone">
					</div>
				</div>
				<div class="addbutton">新增地址</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import headtop from './zu/headtop.vue'
	export default{
		name:'add',
		components:{
			headtop
		},
		data(){
			return{
				name:'',
				url:'',
				texturl:'',
				myphone:'',
				hphone:''
				
			}
		},
		created(){
			//this.$route.params.name=this.$refs.itemh.value
			//console.log(this.$route.params.name)
		}
	}
</script>

<style scoped>
	.box{
		position:fixed;
		left: 0;
		top: 0;
		z-index:101;
		padding-top:100px;
	}
	.arrowaddd{
		color:#fff;
		line-height:80px;
		margin-left:10px;
	}
	.hdi{
		font-size:30px;
		color:#fff;
	}
	.addbox{
		width: 100% ;
		min-height:500px;
		background:#F2F2F2;
		position:fixed;
	}
	.addboxlist{
		height:auto;
		background:#fff;
		padding:10px 20px;
	}
	.input-new{
		padding-bottom:10px;
	}
	.input-new .input{
		display: block;
		    width:100%;
		    font-size:20px;
		    margin: 0 auto;
		    padding:15px;
		    background: #f2f2f2;
		    border: 1px solid #ddd;
		    border-radius: 3px;
			margin-top:10px;
	}
	.addbutton{
		    background: #4cd964;
		    border-radius: 3px;
			width:95%;
			    font-size:20px;
			    color: #fff;
				padding:20px;
			    line-height:30px;
				text-align:center;
				margin:20px auto;
	}
</style>
