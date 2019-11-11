<template>
  <div class="box">
    <headtop>
      <!-- 头部组件 -->
      <template v-slot:profile>
        <router-link to="/profile">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
        </router-link>
        <div class="title_head ellipsis title_head1">积分商城</div>
      </template>
    </headtop>
    <div class="shop_details">
      <h3>请重新进入</h3>
      <p>请返回后重新进入积分商城~</p>
      <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" alt />
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "shop_details",
  components: {
    headtop
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
}
.title_head1 {
  font-size: 26px;
  font-weight: 700;
}
.shop_details {
  margin-top: 80px;
  text-align: center;
  padding-top: 300px;
}
.shop_details h3 {
  font-size: 45px;
  color: #0d7fd5;
  line-height: 30px;
  margin-bottom: 30px;
  font-weight: bold;
}
.shop_details p {
  font-size: 24px;
  color: #666;
  margin-bottom: 40px;
}
.shop_details img {
  width: 300px;
  height: 300px;
}
</style>