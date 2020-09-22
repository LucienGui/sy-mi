<template>
  <div class="box">
    <!-- 购物车顶部     -->
    <div class="box-top top1">
      <div class="top-left" @click="backBtn">
        <img src="../assets/home/左箭头.png" />
      </div>
      <div class="top-content1">购物车</div>
      <div class="top-right" @click="searchBtn">
        <img src="../assets/home/搜索.png" />
      </div>
    </div>
    <!-- 购物车底部 -->
    <div class="box-bottom">
      <div class="bottom-btn" @click="homeBtn">
        <img src="../assets/home/首页2.png" class="bottom-img" />
        <div class="bottom-title first-title2">首页</div>
      </div>
      <div class="bottom-btn" @click="classifyBtn">
        <img src="../assets/home/分类2.png" class="bottom-img" />
        <div class="bottom-title second-title2">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/星球2.png" class="bottom-img" />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/购物车1.png" class="bottom-img" />
        <div class="bottom-title third-title2">购物车</div>
      </div>
      <div class="bottom-btn" @click="myBtn">
        <img src="../assets/home/我的2.png" class="bottom-img" />
        <div class="bottom-title forth-title2">我的</div>
      </div>
    </div>
  </div>
</template>
 
<script>
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
    myBtn() {
      this.$router.push({
        path: "/user",
      });
    },
    backBtn() {
      this.$router.push({
        path: "/",
      });
    },
    searchBtn() {
      this.$router.push({
        path: "/search",
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
}

/* 购物车顶部 */
.box-top {
    padding: 12px;
    flex-shrink: 0;
    background-color: rgb(242, 242, 242);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.box-top img {
  width: 25px;
}
.top-content {
    flex-grow: 1;
    margin: 0 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
}
.content-input {
    border: none;
    outline: none;
    padding-left: 5px;
}
.content-search {
    padding: 3px;
}
.top1 img {
    width: 20px;
}
.top-content1 {
    font-size: 13px;
    color: #424242;
}
/* 购物车底部 */
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

.third-title2{
  color: #ff6700;
}

.first-title2,
.second-title2,
.forth-title2{
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
</style>