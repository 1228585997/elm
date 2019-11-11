<template>
  <div>
    <headtop>
      <template v-slot:discounts>
        <router-link to="/profile">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
        </router-link>
        <div class="title_head ellipsis">
          <span class="title_text">我的优惠</span>
        </div>
      </template>
    </headtop>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "discounts",
  components: {
    headtop
  }
};
</script>

<style scoped>
.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
}
.arrow-downup .van-icon .van-icon-arrow-left{
  padding-left: 15px;
}
.title_head1 {
  font-size: 26px;
  font-weight: 700;
}
</style>