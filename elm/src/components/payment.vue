<template>
  <!-- <div id="payment">

  </div>-->
  <div id="payment">
    <div class="rating_page">
      <div class="rating_header">
        <headtop>
          <!-- 头部组件 -->
          <template v-slot:payment>
              <van-icon name="arrow-left" class="arrow-lefts" size="20px" @click="$router.go(-1)"/>
            <div class="title_head ellipsis title_head1">在线支付</div>
          </template>
        </headtop>
        <div class="show_time">
          <div class="show_time_amount">
            <p class="time_last">支付剩余时间</p>
            <p class="time">
              <van-count-down :time="time" format=" HH : mm : ss " class="times" />
            </p>
          </div>
          <div class="pay_way">
            <p>选择支付方式</p>
          </div>
          <div class="pay_way_list">
            <div class="pay_item">
              <div class="pay_icon_contaienr">
                <img
                  src="http://p0.ifengimg.com/pmop/2017/0825/57A932C9AC8B4752BF7E5796C0684FBF477BD41C_size7_w314_h349.jpeg"
                />
                <span>支付宝</span>
              </div>
              <div class="choose_icon">
                <van-radio-group v-model="radio">
                  <van-radio name="1" checked-color="#07c160" icon-size="25px"></van-radio>
                  
                </van-radio-group>
              </div>
            </div>
            <div class="pay_item">
              <div class="pay_icon_contaienr">
                <img src="http://www.xdowns.com/attachment/syapp/logo/201809061536171675.jpg" />
                <span>微信</span>
              </div>
              <div class="choose_icon">
               <van-radio-group v-model="radio">
				<van-radio name="2" checked-color="#07c160" icon-size="25px"></van-radio>
               </van-radio-group>
              </div>
            </div>
          </div>
          <div class="determine" @click="btn">确认支付</div>
          <van-dialog v-model="show" title="标题" show-cancel-button>
            <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </van-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headtop from "./zu/headtop.vue";
import { Dialog } from "vant";
export default {
  name: "payment",
  components: {
    headtop
  },
  data() {
    return {
      time: 15 * 60 * 1000,
      show: false,
      radio: '1'
    };
  },
  methods: {
    btn() {
      Dialog.alert({
        title: "",
        message: "当前环境无法支付，请打开官方APP进行付款"
      }).then(() => {
        // on close
		
		// console.log(1)
		location.href=`#/order`
      });
    }
  },
  created() {
    Dialog.alert({
      title: "",
      message: "暂不开放支付功能"
    }).then(() => {
      // on close
	  
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
  top: -80px;
  width: 100%;
  z-index: 999;
  height: 1200px;
  background: #f1f1f1;
}
.show_time {
  margin-top: 80px;
}
.show_time_amount {
  margin: 0 auto;
  text-align: center;
  height: 240px;
  background-color: #fff;
  padding-top:100px;
  box-sizing: border-box;
}
.time_last {
  font-size: 26px;
  color: #666;
}
.times {
  color: #333;
  font-size: 50px;
  line-height: 90px;
}
.pay_way {
  width: 90%;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  color: #666;
  font-size: 26px;
}
.pay_way_list {
  background: #fff;
}
.pay_item {
  padding: 4% 4%;
  box-sizing: border-box;
  /* line-height: 160px; */
  height: 160px;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
}
.pay_icon_contaienr {
  float: left;
  overflow: hidden;
}
.pay_icon_contaienr img {
  width: 80px;
  height: 80px;
  float: left;
  border-radius: 50%;
  vertical-align: middle;
}
.pay_icon_contaienr span {
  line-height: 80px;
  display: inline;
  margin-left: 10px;
  color: #666;
  font-size: 28px;
}
.choose_icon {
  float: right;
  margin-top: 26px;
}
.choosed_way {
  width: 40px;
  height: 40px;
}
.determine {
  background-color: #4cd964;
  font-size: 28px;
  color: #fff;
  text-align: center;
  margin:40px 10px;
  line-height: 80px;
  border-radius: 6px;
  font-weight: 700;
}
</style>