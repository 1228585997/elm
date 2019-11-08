<template>
  <div>
    <!-- 头部 -->
    <headtop>
      <template v-slot:shopsearch>
        <router-link to="/shoplist/:id">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
          <div class="title_head ellipsis">
            <span class="title_text">搜索</span>
          </div>
        </router-link>
      </template>
    </headtop>
    <!-- 内容部分 -->
    <div class="con clearfix">
      <div class="search_form">
        <input type="search" class="search_input" placeholder="请输入商家或美食名称" v-model.trim="valtext" />
        <div class="search_submit" @click="search_submit">提交</div>
      </div>
      <!-- 数据获取部分 -->
      <div class="contextbox clearfix">
        <h4 class="title_restaurant" v-if="type">商家</h4>
        <ul class="list_container clearfix" v-if="listarr">
          <li class="list_li" v-for="(item,index) in listarr" :key="index">
            <div class="item_left">
              <img :src="'//elm.cangdu.org/img/'+item.image_path" alt class="item_leftimg" />
            </div>
            <div class="item_right">
              <div class="item_right_text">
                <p class="item_right_textp">
                  <span class="itemspan">{{item.name}}</span>
                  <van-tag plain type="warning" class="pay">支付</van-tag>
                </p>
                <p class="item_right_textp1">月售 {{item.recent_order_num}} 单</p>
                <p>{{item.float_minimum_order_amount}}元起送 / 距离{{item.distance}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import footers from "./zu/footers.vue";
import headtop from "./zu/headtop.vue";
export default {
  name: "shopsearch",
  components: {
    headtop,
    footers
  },
  data() {
    return {
      active: 1,
      valtext: "", //搜索内容
      geohash: "", //获取经纬度
      listarr: [], //获取数据
      type: false //商家
    };
  },
  created() {
    if (localStorage.geohash) {
      this.geohash = JSON.parse(localStorage.geohash);
      console.log(this.geohash);
    }
  },
  methods: {
    search_submit() {
      if (this.valtext == "") {
        return alert("请输入商家或美食名称");
      }
      this.$http
        .get(
          `https://elm.cangdu.org/v4/restaurants?geohash=${this.geohash}&keyword=${this.valtext}`
        )
        .then(res => {
          console.log(res.data);
          this.listarr = res.data;
          this.type = true;
        });
    }
  }
};
</script>

<style scoped>
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
}

.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
  clear: both;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 10px;
}

.title_head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}

.con {
  padding-top: 80px;
  height: auto;
}

.search_form {
  background-color: #fff;
  padding: 18px;
  display: flex;
}

.search_input {
  flex: 4;
  border: 1px solid #e4e4e4;
  font-size: 18px;
  color: #333;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-weight: 700;
  height: 60px;
  padding: 0 10px;
}

.search_submit {
  flex: 1;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #3190e8;
  margin-left: 10px;
  font-size: 26px;
  color: #fff;
  border-radius: 5px;
  background-color: #3190e8;
  font-weight: 600;
  padding: 0 10px;
}
.contextbox {
  width: 100%;
  height: auto;
}
.title_restaurant {
  font-size: 24px;
  line-height: 80px;
  text-indent: 20px;
  font-weight: 700;
  color: #666;
}
.list_container {
  background: #fff;
}
.list_li {
  display: flex;
  justify-content: "center";
  padding: 20px;
  border-bottom: 1px solid #e4e4e4;
}
.item_left {
  margin-right: 10px;
}
.item_left .item_leftimg {
  width: 70px;
  height: 70px;
}
.item_right {
  font-size: 22px;
  flex: 1;
}
.item_right_text {
  padding-bottom: 20px;
  border-bottom: 1px solid #e4e4e4;
}
.item_right_textp,
.item_right_textp1 {
  line-height: 35px;
}
.item_right_textp .itemspan {
  color: #333;
  font-weight: 400;
}
.pay {
  margin-left: 10px;
}
</style>
