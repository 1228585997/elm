<template>
  <div class="box">
    <headtop>
      <!-- 头部组件 -->
      <template v-slot:profile>
        <router-link to="/profile">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
        </router-link>
        <div class="title_head ellipsis title_head1">余额问题</div>
      </template>
    </headtop>
    <div class="balance_details-1">
      <h3>Q1: 使用余额的条件</h3>
      <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      <h3>Q2: 余额可以怎么用？</h3>
      <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      <h3>Q3:我要如何提现？</h3>
      <p>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
      <h3>Q4:为什么会提现失败？</h3>
      <p>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。</p>
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "balance_details",
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
  margin-top: 20px;
}
.balance_details-1 p {
  font-size: 24px;
  line-height: 35px;
  margin-top: 30px;
}
</style>