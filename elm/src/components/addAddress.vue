<template>
  <div class="box">
    <headtop>
      <template v-slot:addAddress>
        <router-link to="/confirmOrder">
          <van-icon name="arrow-left" class="left" />
        </router-link>
        <span class="span-left">添加地址</span>
      </template>
    </headtop>
    <div class="content-input">
      <div>
        <div class="content-name">
          <p>联系人</p>
          <input type="text" placeholder="你的名字" v-model="name" />
          <br />
        </div>
        <div class="xuan">
          <van-radio-group v-model="radio">
            <van-radio name="1" checked-color="#07c160" class="size">
              <span>先生</span>
            </van-radio>
            <van-radio name="2" checked-color="#07c160" class="size size-1">
              <span>女士</span>
            </van-radio>
          </van-radio-group>
        </div>
        <div class="content-name">
          <p>联系电话</p>
          <input type="text" placeholder="你的手机号" name="phone" class="name-input" v-model="phone" maxlength="11"/>
          <br />
        </div>
        <div class="content-name">
          <p>送餐地址</p>
          <router-link to="/confirmOrder/chooseAddress/addAddress/searchAddress">
            <input type="text" placeholder="请输入内容" v-model="url">
          </router-link>
          <router-view></router-view>
          <input type="text" placeholder="详细地址（如门牌号等）" class="name-input" v-model="text"/>
          <br />
        </div>
        <div class="content-name">
          <p>标签</p>
          <input type="text" placeholder="无/家/学校/公司" class="name-input"  v-model="xuxiao"/>
          <br />
        </div>
      </div>
    </div>
	
    <div class="sure-button">
      <div class="btn" @click="quern">确定</div>
    </div>
  </div>
</template>

<script>
import headtop from "./zu/headtop.vue";
import {mapState} from 'vuex'
export default {
  name: "addAddress",
  components: {
    headtop
  },
  data() {
    return {
      radio: "1",
	  name:'',
	  phone:'',
	  url:'',
	  text:'',
	  xuxiao:''
    };
  },
  methods:{
	  quern(){
		  if(this.name!=''&&this.phone!=''&&this.url!=''&&this.text!=''&&this.xuxiao!=''){
		       this.$http.post('http://elm.cangdu.org/v1/users/44104/addresses', {
		       address: this.url,
		       address_detail: this.text,
		       name: this.name,
		       phone: this.phone,
		       tag: this.xuxiao,
		       geohash: localStorage.geohash,
		       phone_bk: "",
		       poi_type: 0,
		       sex: 1,
		       tag_type: 1
		      }).then((data) => {
		       console.log(data.data)
		      })
		      setTimeout(()=>{
		        location.href='#/confirmOrder/chooseAddress'
		        window.onload()
		       },1000)
		      }else{
		       alert('请将数据填写完整')
		      }
	  }
  },
  computed: {
     btn() {
      return this.$store.state.name;
     },
      //判断手机号码
     PhoneNumber:function(){
          return /^1\d{10}$/gi.test(this.phone)
      }
    },
    watch:{
		btn: function(a) {
			console.log(a)
			this.url=a
			
      //this.values = a
     },
     
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
  z-index: 990;
}
.span-left {
  text-align: center;
  width: 100%;
  display: block;
  color: #fff;
  font-size: 30px;
  height: 80px;
  line-height: 80px;
  font-weight: bold;
}
.left {
  position: absolute;
  top: 17px;
  left: 5px;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
}
.head_logo {
  margin-left: 30%;
  width: 300%;
  font-size: 30px;
  font-weight: bold;
}
.content-input {
  margin-top: 80px;
  padding: 20px;
  background: #fff;
}
.content-name {
  width: 100%;
  height: 100px;
  padding: 20px;
  overflow: hidden;
}
.content-name p {
  width: 30%;
  float: left;
  color: #333;
  font-size: 28px;
}
.school {
  line-height: 50px;
  font-size: 28px;
  margin-bottom: 30px;
  color: #999;
}
.name-input {
  width: 70%;
  height: 50px;
  float: left;
  padding-left: 10px;
}
.name-input::-webkit-input-placeholder {
  font-size: 28px;
}
.xuan {
  height: 60px;
}
.van-radio {
  width: 50%;
  float: left;
  line-height: 1.25em;
  padding-left: 100px;
}
.van-radio__icon .van-icon {
  display: block;
  box-sizing: border-box;
  width: 1.25em;
  height: 1.25em;
  color: #fff;
  font-size: 30px;
  line-height: 1.25em;
  text-align: center;
  border: 0.015625rem solid #e5e5e5;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: color, border-color, background-color;
  transition-property: color, border-color, background-color;
  background: #b9afaf;
  margin-top: -8px;
}
.size {
  width: 50%;
  height: 60px;
  font-size: 30px;
  line-height: 60px;
  text-align: center;
  margin-left: 70px;
}
.size span {
  color: #333;
  line-height: 60px;
}
.size-1 {
  float: left;
  margin-left: -180px;
}
.sure-button {
  height: 100%;
  background: #f5f5f5;
  padding-top: 25px;
}
.btn {
  width: 90%;
  height: 80px;
  background: #4cd964;
  margin: 0 auto;
  text-align: center;
  line-height: 80px;
  border-radius: 6px;
  color: #fff;
  font-size: 28px;
}
</style>