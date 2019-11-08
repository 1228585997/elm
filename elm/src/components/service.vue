<template>
	<div>
		<headtop>
			<template v-slot:service>
				<router-link to="/profile">
					<van-icon name="arrow-left" class="arrow-left" />
				</router-link>
				<span class="title_text server">服务中心</span>
			</template>
		</headtop>
		<div class="service_connect clearfix">
			<div class="serviceleft fl">
				<van-icon name="manager-o" size="30px" class="manager-o"/>
				<div class="zx">在线客服</div>
			</div>
			<div class="serviceright fl">
				<van-icon name="phone-o" size="30px" class="manager-o"/>
				<div class="zx">在线客服</div>
			</div>
		</div>
		<div class="hot_questions">
			<h4 class="qustion_header">热门问题</h4>
		</div>
		<ul class="clearfix list">
			<li @click="btn(arr.supervipCaption,arr.supervipContent)">
				{{arr.supervipCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.signCaption,arr.signContent)">
				{{arr.signCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.rankCaption,arr.rankContent)">
				{{arr.rankCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.pointtextCaption,arr.pointtextContent)">
				{{arr.pointtextCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.phototutorialCaption,arr.phototutorialContent)">
				{{arr.phototutorialCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.paymentCaption,arr.paymentContent)">
				{{arr.paymentCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.otherCaption,arr.otherContent)">
				{{arr.otherCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.ontimeCaption,arr.ontimeContent)">
				{{arr.ontimeCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.memberTimesCaption,arr.memberTimesContent)">
				{{arr.memberTimesCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.memberCaption,arr.memberContent)">
				{{arr.memberCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.hongbaoCaption,arr.hongbaoContent)">
				{{arr.hongbaoCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.freshmanCaption,arr.freshmanContent)">
				{{arr.freshmanCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.forgotCaption,arr.forgotContent)">
				{{arr.forgotCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.discountCaption,arr.discountContent)">
				{{arr.discountCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.disclaimerCaption,arr.disclaimerContent)">
				{{arr.disclaimerCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.couponCaption,arr.couponContent)">
				{{arr.couponCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.businessCaption,arr.businessContent)">
				{{arr.businessCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.balanceCaption,arr.balanceContent)">
				{{arr.balanceCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.awesomeRestaurantCaption,arr.awesomeRestaurantContent)">
				{{arr.awesomeRestaurantCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.anonymousBuyCaption,arr.anonymousBuyContent)">
				{{arr.anonymousBuyCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
			<li @click="btn(arr.activityCaption,arr.activityContent)">
				{{arr.activityCaption}}
				<van-icon name="arrow" size="20px"/>
			</li>
		</ul>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import headtop from './zu/headtop.vue'
	export default{
		name:'service',
		components:{
			headtop
			},
		data(){
			return{
				arr:''
			}
		},
		methods:{
			btn(a,b){
				console.log(a,b)
				this.$store.commit('arr',a,)
				this.$store.commit('arr1',b)
				location.href=`#/service/questionDetail`
			}
		},
		created(){
			this.$http.get(`http://elm.cangdu.org/v3/profile/explain`).then((data)=>{
				console.log(data.data)
				this.arr=data.data
			})
		}
	}
</script>

<style scoped>
	.clearfix::after,.clearfix::before{
		content:'';
		display:table;
		clear:both;
	}
	.title_text {
		font-size: 28px;
		color: #fff;
		text-align: center;
		font-weight: 700;
	}
	.server{
		position: absolute;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%,-50%);
		    width: 50%;
		    color: #fff;
		    text-align: center;
	}
	.fl{
		float: left;
	}
	.service_connect{
		width: 100%;
		height:150px;
		background:#fff;
		margin-top:80px;
		border-bottom: 1px solid #f5f5f5;
		box-sizing: border-box;
	}
	.serviceleft{
		width: 50%;
		height: 150px;
		border-right: 1px solid #f5f5f5;
		box-sizing: border-box;
		text-align:center;
	}
	.serviceright{
		width: 50%;
		height: 150px;
		text-align:center;
	}
	.manager-o{
		display:inline-block;
		margin-top:40px;
	}
	.zx{
		   font-size:20px;
		   color: #666;
		}
		.qustion_header{
			font-size: 24px;
			    color: #333;
				height: 100px;
			    border-bottom: 1px solid #f5f5f5;
			    padding-left: 20px;
		}
		.hot_questions{
			background:#fff;
			line-height:100px;
		}
		.list{
			background:#fff;
			height:auto;
			
		}
		.list li{
			padding: 0 20px;
			    line-height:80px;
				height:80px;
			    border-bottom: 1px solid #f5f5f5;
			    display: -ms-flexbox;
			    display: flex;
				font-size:24px;
				color:#999;
			    -ms-flex-pack: justify;
			    justify-content: space-between;
			    -ms-flex-align: center;
			    align-items: center;
		}
</style>
