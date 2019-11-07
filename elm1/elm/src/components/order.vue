<template>
  <div>
    <headtop>
      <template v-slot:order>
        <router-link to="/shoplist/:id">
          <van-icon name="arrow-left" class="arrow-lefts1" size="20px" />
          <div class="title_head ellipsis">
            <span class="title_text">订单列表</span>
          </div>
        </router-link>
      </template>
    </headtop>
    <!-- 尾部 -->
    <div class="footer">
      <router-view />
      <van-tabbar v-model="active" active-color="#3190e8" inactive-color="#000">
        <van-tabbar-item icon="share" to="/shoplist/:id">外卖</van-tabbar-item>
        <van-tabbar-item icon="search" to="/shopsearch">搜索</van-tabbar-item>
        <van-tabbar-item icon="balance-list-o" to="/order">订单</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "order",
  components: {
    headtop
  },
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style scoped>
.van-tabbar {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
}
.arrow-lefts1 {
  color: #fff;
  line-height: 80px;
  margin-left: 10px;
}
</style>
