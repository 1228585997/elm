<template>
  <!-- 尾部 -->
  <div class="footer">
    <router-view />
    <van-tabbar v-model="active" active-color="#3190e8" inactive-color="#000">
      <van-tabbar-item icon="share">外卖</van-tabbar-item>
      <van-tabbar-item icon="search" to="/shopsearch">搜索</van-tabbar-item>
      <van-tabbar-item icon="balance-list-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
	  url:JSON.parse(localStorage.geohash)
    }
  },
 methods:{
	 fn(){
		 location.href=`#/shoplist/${this.url}`
	 }
 }
};
</script>

<style>
.van-tabbar {
  background-color: #fff;
  position: fixed;
  z-index:100;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
}
.van-tabbar-item__icon {
  font-size: 40px;
}
.van-tabbar-item__text{
  font-size: 20px;
}
</style>