<template>
	<div class="clearfix">
		<button class='jian' @click="jian">-</button>
		<span class="num" v-model="num">{{num}}</span>
		<button class='jia' @click="jia">+</button>
	</div>
</template>

<script>
	export default{
		name:'number',
		props:{
			value:{
				type:Number, //限制数据类型
				require:true
			}
		},
		//计算属性
		computed:{
		    num:{
		        get(){
		            return this.value;
					//console.log(this.value)
		        },
		        set(v){
					// console.log(v)
		            this.$emit('input',v)
		        }
		    }
		},
		// 事件函数
		methods:{
			jia(){
				this.num++;
			},
			jian(){
				this.num--
				if(this.num==0){
					this.num=0
					return
				}
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.clearfix::before,.clearfix::after{
		content:'';
		display:table;
		clear:both;
	}
	.jian,.jia{
		width: 40px;
		height: 40px;
		border:none;
		outline:none;
		cursor:pointer;
		border-radius:50%;
		color:#fff;
		background:#09a9ff;
		transition:all .3s;
	}
	.num{
		margin:0 5px 0 5px;
	}
</style>
