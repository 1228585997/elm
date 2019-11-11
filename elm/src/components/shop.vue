<template>
  <div>
    <!-- <headtop> -->
    <!-- 头部组件 -->
    <!-- <template v-slot:back>
        <router-link to="/">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
        </router-link>
      </template>
    </headtop>-->
    <div class="content">
      <div class="content-header" v-if="shop">
        <div class="content-header-left">
          <img :src="'//elm.cangdu.org/img/'+shop.image_path" alt class="img" />
        </div>
        <div class="content-header-right">
          <h3>{{shop.name}}</h3>
          <p>商家配送 / 分钟送达 / {{shop.piecewise_agent_fee.tips}}</p>
          <p>公告：{{shop.promotion_info}}</p>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="content-text">
        <div class="content-tab">
          <ul>
            <li>商品</li>
            <li>评价</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "shop",
  components: {
    headtop
  },
  data() {
    return {
      active: "",
      shop_id: "",
      shop: ""
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.shop_id = this.$route.params.id;
    setTimeout(() => {
      this.getshop();
    }, 1000);
  },
  methods: {
    getshop() {
      this.$http
        .get(
          `http://elm.cangdu.org/shopping/restaurant/${this.shop_id}?latitude=32.69174&longitude=109.05076&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics`
        )
        .then(data => {
          console.log(data.data);
          this.shop = data.data;
        });
    }
  }
};
</script>

<style scoped>
.header {
  background: #f5f5f5;
}
#head_top {
  background: #f5f5f5;
}
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
.content {
  width: 100%;
  height: auto;
}
.content-header {
  width: 100%;
  height: 155px;
  padding: 17px;
  background: #b0b0c2;
}
.content-header-left {
  width: 23%;
  float: left;
}
.content-header-left .img {
  width: 120px;
  height: 120px;
}
.content-header-right {
  width: 70%;
  float: left;
  position: relative;
}
.content-header-right h3 {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
}
.content-header-right p {
  color: #fff;
  font-size: 20px;
  line-height: 35px;
}
.van-icon-arrow:before {
  width: 30px;
  height: 30px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  position: absolute;
  top: -100px;
  margin-left: 400px;
}
.content-text {
  width: 100%;
  height: auto;
}
.content-tab ul li {
  width: 50%;
  height: 60px;
  float: left;
  text-align: center;
  line-height: 60px;
  font-size: 23px;
}
.active {
  color: #b0def6;
  border-bottom: 1px solid #3190e8;
}
</style>
