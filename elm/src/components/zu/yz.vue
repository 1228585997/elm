<template>
	<div class="yzm">
		<div>
			<span v-for="i in newArr">{{ i }}</span>
		</div>
		<div class="yzm_p">
			<p @click="random">看不清</p>
			<p style="color: #3b95e9;" @click="random">换一张</p>
		</div>
	</div>
</template>

<script>
	export default{
		created(){
			this.random()
		},
		data(){
			return{
				arr:[1,2,3,4,5,6,7,8,9,0],
				newArr:[]
			}
		},
		methods:{
			random(){
				this.newArr.length = 0
				for(var i = 0;i<this.arr.length;i++){
					if(this.newArr.length >= 4){
						return this.newArr
					}else{
						this.newArr.push(this.arr[Math.floor(Math.random()*10)])
					}
				}
			}
		}
	}
</script>

<style>
	.yzm{
		top:20px;
		right: 30px;
		position: absolute;
		display: flex;
	}
	.yzm span{
		font-size: 40px;
	}
	.yzm_p{margin-left: 20px;}
	.yzm_p p{
		font-size: 16px;
		margin-bottom: 15px;
	}
</style>