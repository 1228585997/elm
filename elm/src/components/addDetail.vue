<template>
	<div>
		<div class="addsetbox">
			<div class="headttop">
				<headtop></headtop>
			</div>
			<div class="add-detail">
				<input type="text" placeholder="请输入小区/写字楼/学校等" v-model="addtext" class="addinp">
				<button class="btn" @click="search">确认</button>
			</div>
			<div class="warnpart">
				为了满足商家的送餐要求，建议您从列表中选择地址
			</div>
			<ul class="clearfix list" v-if="listarr">
				<li v-for="item in listarr">
					<router-link :to="{name:'add',params:{name:item.name}}">
							<p @click="go(item.name)">{{item.name}}</p>
							<p>{{item.address}}</p>
					</router-link>
				</li>
			</ul>
			<div class="point" v-show="type">
				<p>找不到地址？</p>
				<p>请尝试输入小区、写字楼或学校名</p>
				<p>详细地址（如门牌号）可稍后输入哦。</p>
			</div>
		</div>
	</div>
</template>

<script>
	import headtop from "./zu/headtop.vue";
	export default{
		name:'addDetail',
		components:{
			headtop
		},
		data(){
			return{
				addtext:'',
				type:true,
				listarr:[]
			}
		},

		methods:{
			search(){
				this.$http.get(`https://elm.cangdu.org/v1/pois?type=nearby&keyword=${this.addtext}`).then((data)=>{
					console.log(data.data)
					this.listarr=data.data
					this.type=false
				})
			},
			go(item){
				//console.log(item)
				this.$store.commit('adddata',item)
			}
		}
		
	}
</script>

<style>
	.addsetbox{
		position:fixed;
		left: 0;
		top: 0;
		background:#F2F2F2;
		width: 100%;
		min-height:1000px;
		z-index:103;
		padding-top:100px;
	}
	.add-detail{
		display: flex;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		    background: #fff;
		    padding:20px;
	}
	.add-detail .addinp{
		display: block;
		    width:80%;
		    padding:20px;
		    background: #f2f2f2;
		    border: 1px solid #ddd;
		    border-radius: 5px;
		    font-size:18px;
	}
	.btn{
		display: block;
		    width:100px;
		    background: #3199e8;
		    font-size:18px;
		    color: #fff;
		    border-radius: 5px;
	}
	.warnpart{
		background: #fff6e4;
		    font-size:18px;
		    color: #ff883f;
		    text-align: center;
		   padding:5px 0;
	}
	.point{
		position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%,-50%);
		    width: 100%;
	}
	.point p{
		width: 100%;
		    text-align: center;
		    font-size:18px;
		    color: #969696;
		    margin-bottom: 10px;
	}
	.list{
		background: #f2f2f2;
	}
	.list li{
		border-bottom: 1px solid #ccc;
		    padding:20px;
	}
	.list li p:nth-of-type(1){
		font-size:18px;
		    color: #969696;
			margin-bottom:5px;
	}
	.list li p:nth-of-type(2){
		font-size:18px;
		    color: #969696;
	}
</style>
