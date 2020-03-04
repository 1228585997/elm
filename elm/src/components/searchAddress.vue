<template>
  <div class="box">
    <!-- 头部 -->
    <headtop>
      <template v-slot:searchAddress>
        <router-link to="/confirmOrder/chooseAddress/addAddress/">
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
        <input type="search" class="search_input" placeholder="请输入小区/写字楼/学校等" v-model="input" />
        <div class="search_submit" @click="search_res">提交</div>
      </div>
      <div v-if="search_arr">
        <router-link to="/confirmOrder/chooseAddress/addAddress">
          <div v-for="(i,index) in search_arr" :key="index" class="search-res"> 
            <h3 @click="btn(i.name)">{{i.name}}</h3>
            <p>{{i.address}}</p>
          </div>
        </router-link>
      </div>
      <!-- <div class="address-details">
        <p class="p">找不到地址？</p>
        <p class="p">尝试输入小区、写字楼或学校名</p>
        <p class="p">详细地址（如门牌号等）可稍后输入哦</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "searchAddress",
  components: {
    headtop
  },
  data() {
    return {
      input: "",
      search_arr: ""
    };
  },
  methods: {
    search_res() {
      this.$http
        .get(`http://elm.cangdu.org/v1/pois?type=nearby&keyword=${this.input}`)
        .then(data => {
          console.log(data.data);
          this.search_arr = data.data;
        });
    },
	btn(v){
		this.$store.commit('dataname',v)
	}
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background: #fff;
}
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
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
  margin-bottom: 50px;
}

.search_input {
  flex: 4;
  border: 1px solid #e4e4e4;
  font-size: 20px;
  color: #333;
  border-radius: 5px;
  background-color: #f2f2f2;
  height: 60px;
  padding: 0px 10px;
  padding-left: 25px;
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
.address-details {
  width: 100%;
  height: 100px;
  margin-top: 50%;
}
.address-details .p {
  font-size: 20px;
  color: #aaa;
  line-height: 32px;
  text-align: center;
}
.search-res {
  height: 150px;
  padding-left: 20px;
}
.search-res h3 {
  font-size: 32px;
  color: #333;
  margin-bottom: 5px;
}
.search-res p {
  font-size: 28px;
  color: #999;
  line-height: 50px;
}
</style>