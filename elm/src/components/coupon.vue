<template>
  <div id="coupon">
    <div class="rating_page">
      <div class="rating_header">
        <headtop>
          <!-- 头部组件 -->
          <template v-slot:coupon>
            <router-link to="/discounts">
              <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
            </router-link>
            <div class="title_head ellipsis title_head1">代金券说明</div>
          </template>
        </headtop>
        <div class="markdown">
          <h3>Q1: 什么是商家代金券？</h3>
          <ul>
            <li>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</li>
          </ul>
          <h3>Q2: 怎么获得商家代金券？</h3>
          <ul>
            <li>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li>
            <li>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
          </ul>
           <h3>Q3: 商家代金券使用条件</h3>
          <ul>
            <li>商家代金券仅限在指定商家使用</li>
            <li>商家代金券仅限在线支付使用</li>
            <li>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "coupon",
  components: {
    headtop
  }
};
</script>
<style scoped>
.rating_page {
  position: relative;
}
.rating_header {
  position: absolute;
  left:0;
  width: 100%;
  z-index: 999;
  min-height: 1200px;
  background: #fff;
}
.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
}
.arrow-downup .van-icon .van-icon-arrow-left {
  padding-left: 15px;
}
.title_head1 {
  font-size: 26px;
  font-weight: 700;
}
.markdown {
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
}
.markdown h3 {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 30px;
  color: #333;
  line-height:80px;
}
.markdown ul li {
  color: #666;
  margin-bottom: 10px;
  font-size: 24px;
}
</style>