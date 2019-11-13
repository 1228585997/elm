<template>
  <!-- 兑换红包 -->
  <div id="exchange">
    <div class="rating_page">
      <div class="rating_header">
        <headtop>
          <!-- 头部组件 -->
          <template v-slot:exchange>
            <router-link to="/discounts">
              <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
            </router-link>
            <div class="title_head ellipsis title_head1">兑换红包</div>
          </template>
        </headtop>
        <div class="exchange_code">
          <input type="text" placeholder="请输入兑换码" class="exchange_input" />
          <div class="captcha_code_container">
            <input type="text" placeholder="验证码" class="input_container" />
            <div class="img_change_img">
                <!-- {{sj}} -->
              <div class="img1"><img
                :src="sj" 
              /></div>
              <div class="change_img">
                <p>看不清</p>
                <p @click="btn">换一张</p>
              </div>
            </div>
          </div>
          <div class="determine">兑换</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "exchange",
  components: {
    headtop
  },
  data(){
      return{
          sj:''
      }
  },
  methods: {
    btn() {
      this.$http.post("http://elm.cangdu.org/v1/captchas").then(data => {
        this.sj=data.data.code;
      });
    }
  },
  created() {
    this.$http.post("http://elm.cangdu.org/v1/captchas").then(data => {
      console.log(data.data.code);
      this.sj=data.data.code;
    });
  }
};
</script>
<style scoped>
.rating_page {
  position: relative;
}
.rating_header {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 999;
  min-height: 1200px;
  background: #f1f1f1;
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
.exchange_code {
  margin-top: 100px;
  padding: 0 5%;
}
.exchange_input {
  width: 100%;
  font-size: 32px;
  color: #666;
  line-height: 60px;
  background: #fff;
  padding: 10px 10px;
  border-radius: 8px;
}
.captcha_code_container {
  margin-top: 20px;
  overflow: hidden;
}
.input_container {
  float: left;
  width: 55%;
  font-size: 32px;
  color: #666;
  line-height: 60px;
  background: #fff;
  padding: 10px 10px;
  border-radius: 8px;
  box-sizing: border-box;
}
.img_change_img {
  float: right;
}
.img_change_img {
  float: right;
  background-color: #fff;
  padding-left: 10px;
  border-radius: 8px;
  overflow: hidden;
  height: 80px;
  padding: 10px 10px;
}

.img_change_img .img1 {
  float: left;
  width: 50%;
  margin-top: 20px;
}
.img1 img{
    width:100%;
    height:100%;
}
.change_img {
  width: 40%;
  float: right;
}
.change_img p:nth-of-type(2) {
  color: #3b95e9;
}
.determine {
  background-color: #ccc;
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin: 0 20px;
  line-height: 60px;
  border-radius: 8px;
  margin-top: 20px;
}
</style>