<template>
	<div>
		<headtop>
			<template v-slot:service>
				<router-link to="/profile">
					<van-icon name="arrow-left" class="arrow-left" />
				</router-link>
				<span class="title_text server">{{title}}</span>
			</template>
		</headtop>

		<div class="conbox">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<div class="boxtext">
					<h2>{{text}}</h2>
				</div>
			</van-pull-refresh>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import headtop from './zu/headtop.vue'
	export default {
		name: 'questionDetail',
		data(){
			return{
				   isLoading: false
			}
		},
		components: {
			headtop
		},
		computed: {
			...mapState(['title', 'text'])
		},
		methods:{
			 onRefresh() {
			      setTimeout(()=>{
					  this.isLoading = false;
				  },500)
			  }
		}
	}
</script>

<style scoped>
	.title_text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		color: #fff;
		text-align: center;
	}

	.conbox {
		width: 100%;
		min-height: 1500px;
		background: #fff;
		position: fixed;
		left: 0;
		top: 0;
	}

	.boxtext {
		font-size: 25px;
		margin-top: 80px;
		padding: 0 20px;
		color: #666;
		padding-bottom: 2rem;
	}
</style>
