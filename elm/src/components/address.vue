<template>
	<div>
		<headtop>
			<template v-slot:address>
				<router-link to="/profile/info">
					<van-icon name="arrow-left" class="arrow-left" />
				</router-link>
				<div class="title_head ellipsis clearfix">
					<span class="login_mi title_text">编辑地址</span>
				</div>
			</template>
		</headtop>
		<div class="addsite">
			<div class="addsite1 clearfix">
				<span class="fl diz">新增地址</span>
				<span class="fr">
					<router-link to="/profile/info/address/add">
						<van-icon name="arrow" class="spanvan"  size="20px"/>
					</router-link>
				</span>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import headtop from "./zu/headtop.vue";
	export default {
		name: 'address',
		components: {
			headtop
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>
	.addsite {
		position: fixed;
		min-height: 1000px;
		background: #F2F2F2;
		width: 100%;
		left: 0;
		top: 0;
		z-index: 10;
		box-sizing: border-box;
		padding-top: 100px;
	}

	.addsite1 {
		background: #fff;
		padding: 20px 10px;
	}

	.clearfix:after,
	.clearfix:before {
		content: '';
		display: table;
		clear: both;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.spanvan {
		display: inline-block;
		color:rgb(216, 216, 216);
	}
	.diz{
		display: block;
		    font-size:24px;
		    color: #333;
	}
</style>
