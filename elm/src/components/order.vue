<template>
  <div>
    <headtop>
      <template v-slot:order>
        <router-link to="/shoplist/:id">
          <van-icon name="arrow-left" class="arrow-lefts1" size="20px" />
          <div class="title_head ellipsis">
            <span class="title_text">订单列表</span>
          </div>
        </router-link>
      </template>
    </headtop>
	<footers></footers>
  </div>
</template>

<script>
import footers from './zu/footers.vue'
import headtop from "./zu/headtop.vue";
export default {
  name: "order",
  components: {
	headtop,
	footers
  },
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style scoped>
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
</style>
