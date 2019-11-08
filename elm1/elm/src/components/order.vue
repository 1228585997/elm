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
import footers from "./zu/footers.vue";
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
.arrow-lefts1 {
  color: #fff;
  line-height: 80px;
  margin-left: 10px;
}
</style>
