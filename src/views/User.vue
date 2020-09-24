<template>
  <div class="box">
    <!-- 登录界面底部 -->
    <div class="box-bottom">
      <div class="bottom-btn" @click="homeBtn">
        <img src="../assets/home/首页2.png" class="bottom-img" />
        <div class="bottom-title first-title3">首页</div>
      </div>
      <div class="bottom-btn" @click="classifyBtn">
        <img src="../assets/home/分类2.png" class="bottom-img" />
        <div class="bottom-title second-title3">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/星球2.png" class="bottom-img" />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn" @click="cartBtn">
        <img src="../assets/home/购物车2.png" class="bottom-img" />
        <div class="bottom-title third-title3">购物车</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/我的1.png" class="bottom-img" />
        <div class="bottom-title forth-title3">我的</div>
      </div>
    </div>
  </div>
</template>
 
<script scoped>
export default {
  methods: {
    // 页面切换
    homeBtn() {
      this.$router.push({
        path: "/",
      });
    },
    classifyBtn() {
      this.$router.push({
        path: "/classify",
      });
    },
    cartBtn() {
      this.$router.push({
        path: "/cart",
      });
    },
  },
};
</script>
 
<style scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

a{
    text-decoration: none;
    color: #747474;
}

/* 登录界面底部 */
.box-bottom {
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
    border-top: 1px solid rgb(221, 221, 221);
    box-shadow: 0px -5px 10px rgb(221, 221, 221);
}

.bottom-img {
    width: 20px;
}

.forth-title3{
  color: #ff6700;
}

.first-title3,
.second-title3,
.third-title3{
  color: #747474;
}

.bottom-btn {
    width: 20%;
    flex-shrink: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bottom-title {
    font-size: 12px;
}

.box-content {
    flex-grow: 1;
    overflow: auto;
}
</style>