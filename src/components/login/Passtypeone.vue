<template>
  <div>
    <div class="login-top3">
      <div class="login-top2" ref="top2box1">
        <div class="login-top4">
          <input
            type="text"
            placeholder="邮箱/手机号码/小米ID"
            v-model="message"
            @focus="fun"
          />
        </div>
        <div class="login-item1" v-if="message.trim() != ''" @click="delclick">
          <img src="../../assets/删除.png" />
        </div>
      </div>
    </div>
    <div class="login-top3">
      <div class="login-top2" ref="top2box2">
        <input
          :type="str"
          placeholder="密码"
          v-model="passmessage"
          @focus="fun"
        />
        <div class="login-item" v-if="seen" @click="yanclick">
          <img src="../../assets/眼睛.png" />
        </div>
        <div class="login-item" v-else @click="yanclick">
          <img src="../../assets/眼睛2.png" />
        </div>
      </div>
    </div>
    <div class="login-gan" v-if="seen1 == 1">
      <img src="../../assets/感叹号.png" />
      <span>请输入账号</span>
    </div>
    <div class="login-gan" v-if="seen1 == 2">
      <img src="../../assets/感叹号.png" />
      <span>请输入密码</span>
    </div>
    <div class="login-gan" v-if="seen1 == 3">
      <img src="../../assets/感叹号.png" />
      <span>用户名或密码不正确</span>
    </div>
    <div class="login-list iitem" @click="loginclick">登录</div>
    <div class="login-list iitem1" >
      手机短信登录/注册
    </div>
    <div class="login-list-item">
      <div class="login-listt">立即注册</div>
      |
      <div class="login-listt">忘记密码？</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      seen: true,
      num: 0,
      message: "",
      str: "password",
      passmessage: "",
      seen1: 0,
    };
  },
  computed: {
    isseen() {
      return this.$store.state.isseen;
    },
  },
  methods: {
    changecomponentId(index) {
      if (index == 1) {
        this.componentId = "passtypetwo";
      } 
    },
    yanclick() {
      this.num++;
      if (this.num % 2 != 0) {
        this.seen = false;
        this.str = "text";
      } else {
        this.seen = true;
        this.str = "password";
      }
    },
    delclick() {
      this.message = "";
      this.passmessage = "";
      this.seen1 = 0;
      this.$refs.top2box1.style = "border-bottom:''";
      this.$refs.top2box2.style = "border-bottom:''";
    },
    loginclick() {
            if (this.message.trim() == "") {
                this.seen1 = 1;
                this.$refs.top2box1.style="border-bottom:0.1px solid #ff6700;"
            }else if (this.passmessage.trim() == "") {
                this.seen1 = 2;
                this.$refs.top2box2.style="border-bottom:0.1px solid #ff6700;"
            }     
            if(this.message.trim()!=""&&this.message.trim()!="gjj"&&this.passmessage.trim()!=""&&this.passmessage.trim()!="123456"){
                this.seen1=3
                this.$refs.top2box1.style="border-bottom:0.1px solid #ff6700;";
                this.$refs.top2box2.style="border-bottom:0.1px solid #ff6700;"
            }
            if(this.message.trim()!=""&&this.message.trim()=="gjj"&&this.passmessage.trim()!=""&&this.passmessage.trim()=="123456") {
                this.$store.commit("fun");
                this.$router.go(-1)
            }
        },
    fun() {
      this.seen1 = 0;
      this.$refs.top2box1.style = "border-bottom:''";
      this.$refs.top2box2.style = "border-bottom:''";
    },
  },
};
</script>

<style scoped>
.login-top2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0px; */
  font-size: 18px;
  border-bottom: 0.1px solid #b6b6b6;
  height: 55px;
}
.login-top2 input {
  background: none;
  outline: none;
  border: none;
  margin-left: 10px;
  font-size: 16px;
}
.login-gan {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #ff6700;
  margin-top: 15px;
  padding: 0px 25px;
}
.login-gan img {
  width: 13px;
  height: 13px;
  margin-right: 8px;
}
.login-top3 {
  padding: 0px 25px;
  color: #9b9b9b;
}
.login-top4 {
  flex-grow: 1;
  display: flex;
  align-items: center;
}
.login-item img {
  margin-right: 5px;
  height: 13px;
  width: 20px;
}
.login-list {
  width: 90%;
  height: 50px;
  margin: auto;
  border-radius: 30px;
  text-align: center;
  line-height: 50px;
  margin-top: 25px;
  font-size: 18px;
  font-weight: bolder;
}
.login-item1 img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.iitem {
  background-color: #ff6700;
  color: #fff;
}
.iitem1 {
  background-color: rgba(0, 0, 0, 0.06);
}
.login-list-item {
  color: #9b9b9b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.login-listt {
  margin: 5px;
  font-size: 14px;
}
</style>