<template>
  <div>
 <headtop>
      <!-- 头部组件 -->
      <template v-slot:profile>
        <router-link to="/profile">
          <van-icon name="arrow-left" class="arrow-lefts" size="20px" />
        </router-link>
        <div class="title_head ellipsis title_head1">积分商城</div>
      </template>
    </headtop>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
export default {
  name: "member",
  components: {
    headtop
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.arrow-lefts {
  color: #fff;
  line-height: 80px;
  margin-left: 20px;
}
.title_head1 {
  font-size: 26px;
  font-weight: 700;
}
</style>