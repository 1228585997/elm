<template>
	<div>
		<div class="goback">
			<van-tabs @click="onClick">
			  <van-tab title="商品" line-height="50px">666 </van-tab>
			  <van-tab title="评价">内容 2</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default{
		name:'shop',
		data(){
			return{
				active:''
			}
		},
		methods:{
			onClick(){
				
			}
		}
	}
</script>

<style scoped>
	 .van-tab .van-tabs__line{
		position: absolute;
		    bottom: 0.234375rem;
		    left: 0;
		    z-index: 1;
		    height: 0.046875rem;
		    background-color: #000 !important;
		    border-radius: 0.046875rem;
	}
</style>
