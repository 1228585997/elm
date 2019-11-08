<template>
  <div>
    <div class="profilebox clearfix">
      <!-- 头部组件 -->
      <headtop>
        <template v-slot:profile>
          <router-link to="/shoplist/:id">
            <van-icon name="arrow-left" class="arrow-lefts" size="18px" />
          </router-link>
          <div class="title_head ellipsis title_head1">我的</div>
        </template>
      </headtop>
      <div class="profile-number">
        <div class="profile-link">
          <span class="privateImage"></span>
          <div class="user-info">
            <h3 class="user_login">登录/注册</h3>
            <div class="icon-mobile-number">暂无绑定手机号</div>
          </div>
          <van-icon name="arrow" size="20px" class="arrow" />
        </div>
      </div>
      <div class="info-data">
        <ul class="clearfix infolist">
          <router-link to="/balance">
            <li class="infolist_li fl">
              <span class="info-data-top">
                <b class="info-data-topb">0.00</b>元
              </span>
              <div class="info-data-bottom">我的余额</div>
            </li>
          </router-link>
          <li class="infolist_li fl">
            <span class="info-data-top">
              <b class="info-data-topb incolor">0</b>个
            </span>
            <div class="info-data-bottom">我的优惠</div>
          </li>
          <li class="infolist_li fl">
            <span class="info-data-top">
              <b class="info-data-topb incolor1">0</b>分
            </span>
            <div class="info-data-bottom">我的积分</div>
          </li>
        </ul>
      </div>
      <div class="profile_top">
        <van-cell-group class="van-cell-group">
          <van-cell icon="points" title="我的订单" is-link class="van-cell" />
          <van-cell icon="gold-coin-o" title="积分商城" is-link class="van-cell" />
          <van-cell icon="gift-o" title="饿了么会员卡" is-link class="van-cell" />
        </van-cell-group>
      </div>
      <div class="profile_bottom">
        <van-cell-group class="van-cell-group">
          <van-cell icon="apps-o" title="服务中心" is-link class="van-cell" />
          <router-link to="/download">
             <van-cell icon="aim" title="下载饿了么APP" is-link class="van-cell" />
          </router-link>
        </van-cell-group>
      </div>
      <footers></footers>
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
import footers from "./zu/footers.vue";
export default {
  name: "profile",
  components: {
	headtop,
	footers
  },
  data() {
    return {
      active: 3,
      selected: ""
    };
  }
};
</script>

<style scoped>
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
  clear: both;
}

.profilebox {
  width: 100%;
  height: auto;
}

.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
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

.header_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
}

.title_head1 {
  font-size: 26px;
  font-weight: 700;
}

.profile-number {
  padding-top: 80px;
}

.privateImage {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  vertical-align: middle;
  background: #fff;
}

.profile-link {
  display: block;
  display: -ms-flexbox;
  display: flex;
  box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #3190e8;
  padding: 20px 15px;
}

.user-info {
  margin-left: 20px;
}

.icon-mobile-number {
  display: inline-block;
  font-size: 18px;
  color: #fff;
}

.user_login {
  font-size: 24px;
  color: #fff;
  font-weight: 500;
}

.arrow {
  display: inline-block;
  color: #fff;
  margin-left: 330px;
}

.info-data {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.infolist .infolist_li {
  width: 33.33%;
  display: inline-block;
  text-align: center;
  border-right: 1px solid #f1f1f1;
}
.info-data-top {
  font-size: 20px;
  color: #333;
  padding: 30px 20px;
}
.info-data-topb {
  display: inline-block;
  font-size: 40px;
  color: #f90;
  font-weight: 700;
  height: 80px;
  line-height: 100px;
  font-family: Helvetica Neue, Tahoma;
}

.info-data-bottom {
  font-size: 20px;
  color: #666;
  font-weight: 400;
  padding-bottom: 20px;
}
.incolor {
  color: #ff5f3e;
}
.incolor1 {
  color: #6ac20b;
}
.profile_top,
.profile_bottom {
  margin-top: 15px;
  background: #fff;
}
.van-icon {
  display: block;
  font-size: 24px !important;
  line-height: 60px;
  height: 60px;
}
.van-cell__title span {
  font-size: 24px;
  line-height: 60px;
  color: #333;
}
</style>
