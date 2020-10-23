<template>
  <div>
    <div class="login-top3">
      <div class="login-top2" ref="top2box1">
        <div class="login-top4">
          <input
            type="text"
            placeholder="手机号码"
            v-model="message1"
            @focus="fun"
          />
        </div>
        <div class="login-item1" v-if="message1.trim() != ''" @click="delclick">
          <img src="../../assets/删除.png" />
        </div>
      </div>
    </div>
    <div class="login-top3 second">
      <div class="login-top2" ref="top2box2">
        <input
          :type="str"
          placeholder="短信验证码"
          v-model="passmessage"
          @focus="fun"
        />
      </div>
      <div class="user-get-code" @click="daojishi" v-if="count > 0">
        {{ daojishiflag ? "获取验证码" : count }}
      </div>
      <div class="user-get-code" @click="daojishi" v-if="count == 0">
        重新获取
      </div>
    </div>
    <div class="login-gan" v-if="seen1 == 1">
      <img src="../../assets/感叹号.png" />
      <span>请输入手机号</span>
    </div>
    <div class="login-gan" v-if="seen1 == 2">
      <img src="../../assets/感叹号.png" />
      <span>请输入验证码</span>
    </div>
    <div class="login-gan" v-if="seen1 == 3">
      <img src="../../assets/感叹号.png" />
      <span>手机号格式不正确</span>
    </div>
    <div class="login-list iitem" @click="loginclick">立即登录/注册</div>
    <div class="login-list iitem1">用户名密码登录</div>
    <div class="login-list-item">
      <div class="login-listt">收不到验证码？</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      num: 0,
      message:'',
      str: "password",
      passmessage: "",
      seen1: 0,
      message1: "",
      count: 59,
      daojishiflag: true,
    };
  },
  computed: {
    isseen() {
      return this.$store.state.isseen;
    },
  },
  methods: {
    changecomponentId(index) {
      if (index == 0) {
        this.componentId = "passtypeone";
      }
    },
    daojishi() {
      if (this.message1) {
        console.log(123)
        this.daojishiflag = false;
        
        this.count = 59;

        console.log(this.count);

        let that = this;
        let timer = setInterval(function () {
          that.count--;

          if (that.count == 0) {
            clearInterval(timer);
          }
        }, 1000);
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
      if (this.message1.trim() == "") {
        this.seen1 = 1;
        this.$refs.top2box1.style = "border-bottom:0.1px solid #ff6700;";
      } else if (this.passmessage.trim() == "") {
        this.seen1 = 2;
        this.$refs.top2box2.style = "border-bottom:0.1px solid #ff6700;";
      }
      if (
        this.message1.trim() != "" &&
        this.message1.trim() != "gjj" &&
        this.passmessage.trim() != "" &&
        this.passmessage.trim() != "123456"
      ) {
        this.seen1 = 3;
        this.$refs.top2box1.style = "border-bottom:0.1px solid #ff6700;";
        this.$refs.top2box2.style = "border-bottom:0.1px solid #ff6700;";
      }
      if (
        this.message1.trim() != "" &&
        this.message1.trim() == "gjj" &&
        this.passmessage.trim() != "" &&
        this.passmessage.trim() == "123456"
      ) {
        this.$store.commit("fun");
        this.$router.go(-1);
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
.second {
  display: flex;
  width: 100%;
  margin-left: 1px;
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

.user-get-code {
  width: 93px;
  height: 32px;
  line-height: 32px;
  color: rgb(255, 103, 0);
  border: 1px solid rgb(255, 103, 0);
  border-radius: 50px;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
  margin-right: -16px;
}
</style>