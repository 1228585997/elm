<template>
	<div>
		<div class="goback">
			<van-tabs @click="onClick">
			  <van-tab title="商品" line-height="50px">
				 <div class="con clearfix">
					 
				 </div>
			  </van-tab>
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
				active:'',
				id:'',
				tabPosition: 'left',
				arr:''
			}
		},
		created(){
			this.id=this.$route.params.id
			this.$http.get(`http://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.id}`).then((data)=>{
				console.log(data.data);
				this.arr=data.data
			})
		},
		methods:{
			onClick(){
				
			}
		}
	}
</script>

<style scoped>
	/* .clearfix:after,.cle */
</style>
