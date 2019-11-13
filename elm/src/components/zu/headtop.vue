<template>
	<!-- 头部 -->
	<div class="header clearfix" id="head_top">
		<slot name="home"></slot>
		<slot name="citytop"></slot>
		<slot name="shoplist"></slot>
		<slot name="shopsearch"></slot>
		<slot name="order"></slot>
		<slot name="profile"></slot>
		<slot name="download"></slot>
		<slot name="discounts"></slot>
		<slot name="back"></slot>
		<slot name="food"></slot>
		<slot name="login"></slot>
		<slot name="forget"></slot>
		<slot name="service"></slot>
		<slot name="info"></slot>
		<slot name="setusername"></slot>
		<slot name="address"></slot>
		<slot name="add"></slot>
		<slot name="addDetail"></slot>
		<slot name="payment"></slot>
		<slot name="vipDescription"></slot>
		<slot name="useCart"></slot>
		<slot name="hbDescription"></slot>
		    <slot name="exchange"></slot>
		    <slot name="commend"></slot>
		    <slot name="coupon"></slot>
		    <slot name="download1"></slot>
		 <slot name="confirmOrder"></slot>
		    <slot name="chooseAddress"></slot>
		    <slot name="addAddress"></slot>
		    <slot name="searchAddress"></slot>
	</div>
</template>

<script>
	export default {
		name: "headtop"
	};
</script>

<style scoped>
	#head_top {
		background-color: #3190e8;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 80px;
	}

	.head_login {
		right: 20px;
		font-size: 26px;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.login_span {
		color: #fff;
	}

	.head_logo {
		left: 20px;
		font-weight: 400;
		font-size: 26px;
		color: #fff;
		line-height: 80px;
		width: 100px;
		height: 80px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
