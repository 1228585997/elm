<template>
  <div id="food">
    <!-- 头部 -->
    <headtop>
      <template v-slot:food>

          <van-icon name="arrow-left" class="arrow-left" @click="$router.go(-1)"/>
  
        <section class="title_head ellipsis">
          <span class="title_text">{{lbsort}}</span>
        </section>
      </template>
    </headtop>
    <!-- 头部美食分类,排序,筛选 -->
    <div class="sort_container">
      <div class="sort_item_border">
        <div class="sort_item_border_bottom">
          <!-- <div
            v-for="(i,index) in arr1"
            :key="index" v-bind:class="{active:i.content}"
            @click="type=index"
            class="category_title"
          >{{i.title}}</div>-->
          
          <div class="category_title" @click="open=!open">分类</div>
          <div class="category_title" @click="open1=!open1">排序</div>
          <div class="category_title" @click="open2=!open2">筛选</div>
        </div>
        <!--分类 -->
        <div v-if="open" class="a1">
          <div>
          <div v-for="(i,item) in arr" class="category_container" :key="item">
            <div class="imgicon">
              <div v-for="(i,index) in imgicon" :key="index" class="smallimg">
                <img :src="i" class="category_icon" />
              </div>
            </div>
            <div class="category_left" @click="types=item" :class="types==item?'active':''">
              <div class="category_name">{{i.name}}</div>
              <div class="category_gt">></div>
              <div class="category_count">
                <span class="category_span">{{i.count}}</span>
              </div>
            </div>
            <div class="category_right">
              <div
                v-for="(j,items) in i.sub_categories"
                v-show="items==types"
                :key="items"
                @click="b=j.id;list()"
              >
                <div class="category_right_name">{{j.name}}</div>
                <div class="category_right_count">{{j.count}}</div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <!-- 排序 -->
        <div v-else-if="open1" class="a1">
          <div class="svg_icon">
            <div v-for="(i,index) in svg_icon" :key="index">
              <svg class="icon svg_iconfont" aria-hidden="true">
                <use :xlink:href="i" />
              </svg>
            </div>
          </div>
          <div class="sort_list_ul">
            <div v-for="(i,item1) in arr_sort" :key="item1" @click="a=i.icon;list()">
              <div class="sort_list_li">{{i.title}}</div>
            </div>
          </div>
        </div>
        <!-- 筛选 -->
        <div v-else-if="open2" class="a1">
          <div class="filter_container">
            <div class="filter-top">
              <h5 class="filter_h5">配送方式</h5>
              <span class="filter_li">蜂鸟专送</span>
            </div>
            <div class="filter-center">
              <h5 class="filter_h5">商家属性(可以多选)</h5>
              <div v-for="(i,index) in sort_detail_type" :key="index">
                <div class="sort_detail">
                  <span
                    :style="[{color:'#'+i.icon_color},{border:'#'+i.icon_color+' 1px'+ ' solid'}]"
                    class="sort_color"
                  >{{i.icon_name}}</span>
                  <span class="sort_name">{{i.name}}</span>
                </div>
              </div>
            </div>
            <div class="filter-bottom">
              <div class="sort_button">
                <span>清空</span>
                <span class="queren" @click="btn">确定</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 食品分类列表 -->
    <div class=" shop_list_container1 clearfix">
      <!-- 数据食品分类列表 -->
      <div class="shop_list1_container clearfix">
        <ul class="clearfix">
          <li v-for="(item,index) in foodlist" :key="index" style="overflow:hidden;">
            <router-link :to="{name:'shop',params:{id:item.id}}">
              <div class="shop-left">
                <img
                  :src="'//elm.cangdu.org/img/'+item.image_path"
                  alt="暂无数据,非常抱歉"
                  style="width:100%;"
                />
              </div>
            </router-link>
            <router-link :to="{name:'shop',params:{id:item.id}}">
              <div class="shop_right">
                <header class="shop_right_header">
                  <h4 class="shop_title ellipsis premium">
                    <van-tag type="danger" size="medium" color="#ffd930">品牌</van-tag>
                    <span class="shop_title_text">{{item.name}}</span>
                  </h4>
                  <ul class="shop_detail_ul">
                    <li
                      class="supports"
                      v-for="(i,index) in item.supports"
                      :key="index" 
                    >{{i.icon_name}}</li>
                  </ul>
                </header>
                <div class="shop_rightcenter">
                  <div class="shop_rightcenterleft">
                    <div class="rating_section">
                      <van-rate
                        v-model="value"
                        :count="5"
                        :size="10"
                        :gutter="0"
                        color="#ff9a0d"
                        readonly
                      />
                      <span class="rate">{{item.rating}}</span>
                      <span class="dingdan">月售{{item.recent_order_num?item.recent_order_num:0}}</span>
                    </div>
                  </div>
                  <div class="shop_rightcenterright">
                    <!-- <span class="delivery_style">{{item.delivery_mode.text?item.delivery_mode.text:''}}</span> -->
                    <span class="delivery_right">准时达</span>
                  </div>
                </div>
                <div class="shop_rightbottom">
                  <div class="fee">
                    &yen{{item.float_minimum_order_amount}}元起送 /
                    <span>{{item.piecewise_agent_fee.tips}}</span>
                  </div>
                  <div class="distance_time">
                    <span class="distance_time1">{{item.distance}} /</span>
                    <span class="order_time">{{item.order_lead_time}}</span>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "food",
  components: {
    headtop
  },
  data() {
    return {
		z_index:0,
      lbsort: "", //轮播食品分类名字
      arr: "", //分类名字
      type: 0,
      types: 0,
      a: "",
      b: "",
      open:false,
      open1:false,
      open2:false,
      arr_sort: [
        { icon: "0", title: "智能排序" },
        { icon: "5", title: "距离最近" },
        { icon: "6", title: "销量最高" },
        { icon: "1", title: "起送价最低" },
        { icon: "2", title: "配送速度最快" },
        { icon: "3", title: "评分最高" }
      ], //排序
      foodlist: "", //获取商铺列表
      sort_detail_type: "", //筛选
      value: 5,
      imgicon: [
        "https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png",
        "https://fuss10.elemecdn.com/4/35/a7eda7659bac613e524ca7c1ae12epng.png",
        "https://fuss10.elemecdn.com/6/23/5a6fce94bed63a21508f68a72c158png.png",
        "https://fuss10.elemecdn.com/6/55/ac1bfd1e818013a9f099e964f1e9djpeg.jpeg",
        "https://fuss10.elemecdn.com/a/c1/5c5dd59b641bdfdeb822362547fb4png.png",
        "https://fuss10.elemecdn.com/0/e0/7558e305abfb2618ae760142222f9png.png",
        "https://fuss10.elemecdn.com/0/e0/7558e305abfb2618ae760142222f9png.png",
        "https://fuss10.elemecdn.com/4/82/43703799592368585b23589cf3ba8png.png"
      ],
      svg_icon: [
        "#icon-jiantou_shangxiaqiehuan",
        "#icon-dizhi",
        "#icon-08",
        "#icon-qian",
        "#icon-biao",
        "#icon-wujiaoxing"
      ]
    };
  },
  methods: {
    list() {
      this.$http
        .get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=32.035351&longitude=118.820363&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=" +
            this.b +
            "&order_by=" +
            this.a +
            "&delivery_mode[]="
        )
        .then(data => {
          console.log(data.data);
          this.foodlist = data.data;
        });
    },
	btn(){
		alert('点击确认了')
	}
  },
  created() {
    localStorage.title = JSON.stringify(this.$route.query.title);
    console.log(this.$route.query);
    this.lbsort = JSON.parse(localStorage.title);
    console.log(this.lbsort);
    this.$http
      .get(
        "http://elm.cangdu.org/shopping/v2/restaurant/category?latitude=31.22299&longitude=121.36025"
      )
      .then(res => {
        console.log(res.data);
        this.arr = res.data;
      });
    // 获取商铺列表
    this.$http
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=32.035351&longitude=118.820363&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by= &delivery_mode[]=  "
      )
      .then(data => {
        console.log(data.data);
        this.foodlist = data.data;
      });
    this.$http
      .get(
        "http://elm.cangdu.org/shopping/v1/restaurants/activity_attributes?latitude=31.28682&longitude=121.47797&kw="
      )
      .then(data1 => {
        console.log(data1.data);
        this.sort_detail_type = data1.data;
      });
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.active1{
	background: red;
}
.sort_container {
  margin-top: 80px;
  position: relative;
  background: #fff;
}
.queren{
	background:#56d176 !important;
	    color: #fff !important;

}
.sort_item_border {
  width: 100%;
  position: relative;
}
.a1{
  position: absolute;
  z-index:999;
  min-height:300px;
  width:100%;
  top:70px;
  background: #fff;
  
}
.sort_item_border_bottom {
  border-bottom: 1px #ccc solid;
  /* height: 70px; */
  /* line-height: 70px; */
}
.shop_list_container1{
  box-sizing: border-box;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
}
.category_title {
  width: 33.3%;
  float: left;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.category_container {
  width: 100%;
  overflow: hidden;
}
.imgicon {
  position: absolute;
  top: 110px;
  width: 10%;
  float: left;
}
.smallimg {
  width: 100%;
  height: 50px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
}

.category_icon {
  width: 30px;
  height: 30px;
  margin: 13px 40px 0 20px;
}
.category_left {
  width: 50%;
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 40px;
  background: #f5f5f5;
}
.active {
  background: #fff;
}
.category_name {
  float: left;
  line-height: 40px;
  margin-left: 70px;
}
.category_count {
  float: right;
}
.category_span {
  padding: 0px 4px;
  margin: 5px 4px 5px 0px;
  border-radius: 15px;
  background: #ccc;
  float: right;
  color: #fff;
  font-size: 16px;
}
.category_gt {
  float: right;
  margin-left: 10px;
  margin-right: 15px;
}
.category_right {
  width: 50%;
  float: left;
  overflow: hidden;
  padding-left: 15px;
}
.category_right_name {
  float: left;
}
.category_right_count {
  float: right;
  margin-right: 10px;
}
.category_right {
  border-bottom: 1px #ccc solid;
  box-sizing: border-box;
  line-height: 40px;
}
.sort_list_li {
  border-bottom: 1px #ccc solid;
  line-height: 80px;
  color: #666;
  box-sizing: border-box;
  font-size: 24px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg_icon {
  float: left;
  width: 20%;
  line-height: 80px;
  text-align: center;
}
.svg_iconfont {
  width: 24px;
  height: 24px;
}
.icon-jiantou_shangxiaqiehuan {
  color: blue;
}
.sort_list_ul {
  float: left;
  width: 80%;
}
.filter_li {
  display: block;
  width: 140px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px #d6cfcf solid;
  box-sizing: border-box;
  color: #333;
  font-size: 15px;
}
.filter_container {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.filter-top {
  width: 100%;
  height: 110px;
  padding-left: 30px;
}
.filter-center {
  width: 100%;
  height: 210px;
  padding-left: 30px;
}

.filter_h5 {
  line-height: 60px;
}
.sort_detail {
  float: left;
  width: 30%;
  margin-right: 3%;
  border: 1px #e7d4d4 solid;
  margin-bottom: 10px;
  padding: 10px;
}
.sort_color {
  display: inline-block;
  padding: 0px 5px;
  line-height: 30px;
  text-align: center;
  margin-right: 10px;
  font-size: 18px;
  border-radius: 6px;
}
.sort_name {
  display: inline-block;
  color: #333;
  font-size: 16px;
}
.filter-bottom {
  width: 100%;
  height: 100px;
  background: #f1f1f1;
}
.sort_button span {
  display: inline-block;
  width: 40%;
  background-color: #fff;
  border-radius: 6px;
  margin: 15px 5%;
  text-align: center;
  line-height: 70px;
  color: #000;
  font-size: 24px;
  font-weight: normal;
}
.button-active {
  background-color: #56d176;
}
.shop_list_container {
  margin-top: 30px;
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
}

.shop-o {
  color: #999;
  margin-left: 10px;
  vertical-align: middle;
  width: 20px;
  height: 80px;
  line-height: 80px;
  display: block;
  float: left;
}

.shop_header_title {
  color: #999;
  font-size: 22px;
  float: left;
  padding: 28px;
}

.shop_li {
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  padding: 20px 15px;
  width: 100%;
}

.shop-left {
  width: 20%;
  float: left;
  margin-right: 2%;
  padding: 10px;
}
.shop_right {
  width: 75%;
  float: left;
  padding-right: 30px;
  margin-top: 10px;
}
.shop_right_header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}

.shop_title {
  width: 300px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
}

.van-tag {
  width: 50px !important;
  text-align: center;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-right: 10px;
}

.shop_title_text {
  font-size: 20px;
  font-weight: bold;
}

.shop_detail_ul {
  display: -ms-flexbox;
  display: flex;
  transform: scale(0.8);
  margin-right: 10px;
}

.supports {
  font-size: 20px;
  color: #999;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin-left: 5px;
}

.shop_rightcenter {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 40px;
  margin-top: 15px;
}

.shop_rightcenterleft {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.rating_section {
  display: flex;
  display: -ms-flexbox;
}

.rate {
  font-size: 14px;
  color: #ff6000;
  margin: 0 10px;
}

.dingdan {
  transform: scale(0.8);
  margin: -2px 0 0 -5px;
  font-size: 16px;
  color: #333;
}

.shop_rightcenterright {
  isplay: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  transform: scale(0.7);
  min-width: 200px;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin: -20px -30px 0 0;
}

.delivery_style {
  color: #fff;
  background-color: #3190e8;
  border: 1px solid #3190e8;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 5px;
  margin-left: 5px;
}

.delivery_right {
  font-size: 16px;
  padding: 0 10px;
  border: 1px solid #3190e8;
  border-radius: 5px;
  margin-left: 5px;
  color: #3190e8;
}

.shop_rightbottom {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 16px;
  color: #333;
}

.fee {
  width: 260px;
  transform: scale(0.9);
  font-size: 16px;
  color: #666;
}

.distance_time {
  transform: scale(0.9);
}

.distance_time1 {
  color: #999;
}

.order_time {
  color: #3190e8;
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
</style>