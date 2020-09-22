<template>
  <div class="box">
    <!-- 首页顶部 -->
    <div class="box-top">
      <div class="top-left">
        <img src="../assets/home/图标.png" />
      </div>
      <div class="top-content" @click="searchBtn">
        <img src="../assets/home/放大镜.png" class="content-search" />
        <input type="text" readonly="readonly" placeholder="搜索商品名称" class="content-input" />
      </div>
      <div class="top-right" @click="signBtn">
        <img src="../assets/home/我的2.png" alt />
      </div>
    </div>

    <!-- 首页底部 -->
    <div class="box-bottom">
      <div class="bottom-btn">
        <img src="../assets/home/首页1.png"  class="bottom-img" />
        <div class="bottom-title first-title">首页</div>
      </div>
      <div class="bottom-btn" @click="classifyBtn">
        <img src="../assets/home/分类2.png" class="bottom-img" />
        <div class="bottom-title second-title">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/星球2.png" class="bottom-img" />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn bottom-count" @click="cartBtn">
        <img src="../assets/home/购物车2.png" class="bottom-img" />
        <div class="bottom-title third-title">购物车</div>
      </div>
      <div class="bottom-btn" @click="myBtn">
        <img src="../assets/home/我的2.png" class="bottom-img" />
        <div class="bottom-title forth-title">我的</div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
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
    myBtn() {
      this.$router.push({
        path: "/user",
      });
    },
    searchBtn() {
      this.$router.push({
        path: "/search",
      });
    },
    signBtn() {
      this.$router.push({
        path: "/user",
      });
    },
  },
};
</script>
 
<style >
.box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

a{
    text-decoration: none;
    color: #747474;
}

/* 首页顶部 */
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
  width: 21px;
}

.top-content {
    flex-grow: 1;
    margin: 0 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
    border: 1px solid #e5e5e5;
}

.content-input {
    border: none;
    outline: none;
    padding-left: 5px;
    font-size: 15px;
}

.content-search {
    padding: 3px;
}

.top1 img {
    width: 20px;
}

.top-content1 {
    font-size: 13px;
}

/* 首页底部 */

.bottom-count{
    position: relative;
}

.countbox{
    position: absolute;
    width: 16px;
    height: 16px;
    font-size:5px;
    color: #fff;
    background-color:#ed4d41;
    border-radius: 50%;
    top: 6px;
    right: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.first-title{
  color: #ff6700;
}

.second-title,
.third-title,
.forth-title{
  color: #747474;
}

.box-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10px;
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