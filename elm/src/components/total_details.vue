<template>
  <div class="box">
    <headtop>
      <!-- 头部组件 -->
      <template v-slot:profile>
        <router-link to="/profile">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
        </router-link>
        <div class="title_head ellipsis title_head1">积分问题</div>
      </template>
    </headtop>
    <div class="balance_details-1">
      <h3>Q1: 怎么获得积分？</h3>
      <p>在线支付的订单将获得订单积分奖励：</p>
      <p>积分将在用户完成评价后获得。</p>
      <p>可获得积分=订单金额×10（即1元=10点积分）。</p>
      <p>订单金额指实际付款金额，不包含活动优惠金额。</p>
      <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
      <h3>Q2: 积分用来做什么？</h3>
      <p>可以在积分商城兑换各种礼品。</p>
      <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
      <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
      <h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
      <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "total_details",
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
.box{
 width:100%;
 height: 125%;
 background:#fff;
 position:absolute;
 top:0;
 left:0;
}
.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
}
.balance_details-1 {
  width: 100%;
  margin-top: 80px;
  color: #333;
  font-weight: 400;
  font-family: Microsoft Yahei;
  padding: 5px 15px 15px 15px;
}
.balance_details-1 h3 {
  font-size: 30px;
  line-height: 50px;
  margin: 20px 0;
}
.balance_details-1 p {
  font-size: 22px;
  line-height: 35px;
  /* margin-top: 30px; */
}
</style>