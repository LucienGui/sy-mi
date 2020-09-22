<template>
  <div class="box">
    <!-- 分类页顶部 -->
    <div class="box-top top1">
      <div class="top-left" @click="backBtn">
        <img src="../assets/home/左箭头.png" />
      </div>
      <div class="top-content1">分类</div>
      <div class="top-right" @click="searchBtn">
        <img src="../assets/home/搜索.png" />
      </div>
    </div>
    <!-- 分类页底部 -->
    <div class="box-bottom">
      <div class="bottom-btn" @click="homeBtn">
        <img src="../assets/home/首页2.png" class="bottom-img" />
        <div class="bottom-title first-title1">首页</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/分类1.png" class="bottom-img" />
        <div class="bottom-title second-title1">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/星球2.png" class="bottom-img" />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn" @click="cartBtn">
        <img src="../assets/home/购物车2.png" class="bottom-img" />
        <div class="bottom-title third-title1">购物车</div>
      </div>
      <div class="bottom-btn" @click="myBtn">
        <img src="../assets/home/我的2.png" class="bottom-img" />
        <div class="bottom-title forth-title1">我的</div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
    // 搜索按钮
    searchBtn() {
      this.$router.push({
        path: "/search",
      });
    },
    backBtn() {
      this.$router.push({
        path: "/",
      });
    },
    // 页面切换
    homeBtn() {
      this.$router.push({
        path: "/",
      });
    },
    cartBtn() {
      this.$router.push({
        path: "/cart",
      });
    },
    myBtn() {
      this.$router.push({
        path: "/user",
      });
    },
  },
};
</script>
 
<style>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

/* 分类顶部 */
.box-top {
  /* padding: 12px; */
  /* flex-shrink: 0; */
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 50px;
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
  width: 30px;
  margin-top: 5px;
}

.top-content1 {
  font-size: 1rem;
  color: #424242;
}

/* 分类底部 */
.box-bottom {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(221, 221, 221);
  box-shadow: 0px -5px 10px rgb(221, 221, 221);
}

.second-title1{
  color: #ff6700;
}

.first-title1,
.third-title1,
.forth-title1{
  color: #747474;
}

.bottom-img {
  width: 20px;
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