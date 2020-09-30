<template>
  <div class="box">
    <!-- 首页顶部 -->
    <div class="box-top top1">
      <div class="top-left" @click="backBtn">
        <img src="../assets/箭头 left.png" alt />
      </div>
      <div class="top-content1">分类</div>
      <div class="top-right" @click="searchBtn">
        <img src="../assets/搜索2.png" alt />
      </div>
    </div>



    <!-- 底部 -->
    <div class="box-bottom">
      <div class="bottom-btn" @click="homeBtn">
        <img src="../assets/首页1.png" class="bottom-img" alt />
        <div class="bottom-title">首页</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/分类2.png" alt class="bottom-img" />
        <div class="bottom-title">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/星球1.png" class="bottom-img" alt />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn" @click="cartBtn">
        <img src="../assets/购物车1.png" class="bottom-img" alt />
        <div class="bottom-title">购物车</div>
      </div>
      <div class="bottom-btn" @click="myBtn">
        <img src="../assets/我的1.png" class="bottom-img" alt />
        <div class="bottom-title">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop:0,
    };
  },

  methods: {
    divScroll(event) {
      this.scrollTop = event.target.scrollTop;
    },

    // 搜索按钮
    searchBtn() {
        this.$router.push({
            path: "/search",
        });
    },
    backBtn() {
        this.$router.push({
            path:"/"
        })
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
        path: "/my",
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

a {
  text-decoration: none;
  color: #747474;
}

/* 顶部 */
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

/* 底部 */
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
  color: #747474;
}

.box-content {
  flex-grow: 1;
  overflow: auto;
}


</style>