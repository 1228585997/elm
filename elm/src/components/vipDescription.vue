<template>
  <div id="vipDescription">
    <div class="rating_page">
      <div class="rating_header">
        <headtop>
          <!-- 头部组件 -->
          <template v-slot:vipDescription>
            <router-link to="/member">
              <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
            </router-link>
            <div class="title_head ellipsis title_head1">我的优惠</div>
          </template>
        </headtop>
        <div class="markdown">
          <div class="blockquote">
            <p>
              尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
              购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
              注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
            </p>
          </div>
          <h3>Q1: 特权介绍</h3>
          <ul>
            <li>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</li>
            <li>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</li>
            <li>更多特权，敬请期待！</li>
          </ul>
          <h3>Q2: 资费介绍</h3>
          <ul>
            <li>饿了么会员卡：20元</li>
          </ul>
           <h3>Q3: 使用说明</h3>
          <ul>
            <li>当用户满足以下任一条件，会员服务自动失效：</li>
          </ul>
          <ol>
              <li>自绑定之日起超过31天；</li>
              <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
          </ol>
          <h3>Q4: 购卡说明</h3>
          <ul>
            <li>在线购买：饿了么App>我的>饿了么会员卡</li>
          </ul>
          <h3>Q5: 温馨提示</h3>
          <ul>
            <li>用户在当前会员服务失效前，无法购买新卡。</li>
            <li>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "vipDescription",
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
  top: -80px;
  width: 100%;
  z-index: 999;
  height: 1200px;
  background: #fff;
}
.markdown {
  width: 90%;
  margin: 0 auto;
  margin-top: 80px;
}
.blockquote {
  width: 80%;
  margin: 0 auto;
  padding-top:100px;
  box-sizing: border-box;
}
.blockquote p {
  color: #333;
  font-size: 26px;
  line-height: 34px;
}
.markdown h3 {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 30px;
  font-weight: 600;
  color: #333;
}
.markdown ul li {
  color: #666;
  margin-bottom: 10px;
  font-size: 24px;
}
.markdown ol{
    padding-top:10px;
    padding-bottom:10px;
    box-sizing: border-box
}
.markdown ol li{
    margin-left:10%;
    color: #666;
  margin-bottom: 10px;
  font-size: 24px;
}
</style>