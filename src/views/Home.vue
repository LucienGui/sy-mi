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

    <!-- 推荐列表 -->
    <template>
      <div class="box-nav">
        <div class="title-wrap">
          <div
            class="nav-title"
            :class="{active:componentNames=='recommend-page'}"
            @click="titleClick('recommend-page',1)"
          >推荐</div>
          <div
            class="nav-title"
            :class="{active:componentNames=='phone-page'}"
            @click="titleClick('phone-page',2)"
          >手机</div>
          <div
            class="nav-title"
            :class="{active:componentNames=='intellect-page'}"
            @click="titleClick('intellect-page',3)"
          >智能</div>
          <div
            class="nav-title"
            :class="{active:componentNames=='television-page'}"
            @click="titleClick('television-page',4)"
          >电视</div>
          <div
            class="nav-title"
            :class="{active:componentNames=='laptop-page'}"
            @click="titleClick('laptop-page',5)"
          >笔记本</div>
          <div
            class="nav-title"
            :class="{active:componentNames=='household-page'}"
            @click="titleClick('household-page',6)"
          >家电</div>
          <div
            class="nav-title"
            :class="{active:componentNames=='living-page'}"
            @click="titleClick('living-page',7)"
          >生活周边</div>
        </div>
        <div class="img-wrap" @click="arrowBtn1">
          <img src="../assets/home/首页上下箭头.png" class="nav-img" />
        </div>
      </div>
    </template>

    <!-- 下拉列表 -->
    <template v-if="seen">
      <div class="whole-nav">
        <div class="whole-top">
          <div class="whole-title-wrap">
            <div class="whole-title">全部</div>
          </div>
          <div class="whole-img-wrap" @click="arrowBtn2">
            <img src="../assets/home/首页箭头上.png" class="whole-img" />
          </div>
        </div>
        <div class="whole-content">
          <div
            class="whole-item"
            :class="{act:componentNames == 'recommend-page'}"
            @click="titleClick('recommend-page')"
          >推荐</div>
          <div
            class="whole-item"
            :class="{act:componentNames == 'phone-page'}"
            @click="titleClick('phone-page')"
          >手机</div>
          <div
            class="whole-item"
            :class="{act:componentNames == 'intellect-page'}"
            @click="titleClick('intellect-page')"
          >智能</div>
          <div
            class="whole-item"
            :class="{act:componentNames == 'television-page'}"
            @click="titleClick('television-page')"
          >电视</div>
          <div
            class="whole-item"
            :class="{act:componentNames == 'laptop-page'}"
            @click="titleClick('laptop-page')"
          >笔记本</div>
          <div
            class="whole-item"
            :class="{act:componentNames == 'household-page'}"
            @click="titleClick('household-page')"
          >家电</div>
          <div
            class="whole-item"
            :class="{act:componentNames == 'living-page'}"
            @click="titleClick('living-page')"
          >生活周边</div>
        </div>
      </div>
    </template>

    <!-- 遮罩层 -->
    <div class="mask" v-if="mask"></div>

    <!-- 动态组件 -->
    <component :is="componentNames"></component>

    <!-- 首页底部 -->
    <div class="box-bottom">
      <div class="bottom-btn">
        <img src="../assets/home/首页1.png" class="bottom-img" />
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
import Recommend from "../components/Recommend.vue";
import Phone from "../components/Phone.vue";
import Intellect from "../components/Intellect.vue";
import Television from "../components/Television.vue";
import Laptop from "../components/Laptop.vue";
import Household from "../components/Household.vue";
import Living from "../components/Living.vue";

export default {
  data() {
    return {
      seen: false,
      mask: false,
      componentNames: "recommend-page",
      isNum: 0,
      rightLeft: "left",
    };
  },
  components: {
    "recommend-page": Recommend,
    "phone-page": Phone,
    "intellect-page": Intellect,
    "television-page": Television,
    "laptop-page": Laptop,
    "household-page": Household,
    "living-page": Living,
  },
  methods: {
    //动态组件
    titleClick(name, num) {
      this.componentNames = name;
      this.isNum = num;
    },

    //下拉列表切换
    arrowBtn1() {
      (this.seen = true), (this.mask = true);
    },
    arrowBtn2() {
      (this.seen = false), (this.mask = false);
    },

    // 页面跳转
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

.bottom-count {
  position: relative;
}

.countbox {
  position: absolute;
  width: 16px;
  height: 16px;
  font-size: 5px;
  color: #fff;
  background-color: #ed4d41;
  border-radius: 50%;
  top: 6px;
  right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-title {
  color: #ff6700;
}

.second-title,
.third-title,
.forth-title {
  color: #747474;
}

.box-bottom {
  /* position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10px; */
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

/* 推荐列表 */
.box-content {
  flex-grow: 1;
  overflow: auto;
}

.box-nav {
  flex-grow: 1;
  position: relative;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(242, 242, 242);
  border-bottom: 1px solid rgb(221, 221, 221);
  box-shadow: 0px 5px 10px rgb(221, 221, 221);
}

.nav-img {
  width: 20px;
}

.nav-title {
  color: #747474;
  font-size: 14px;
  margin-right: 20px;
}

.title-wrap {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
}

.title-wrap::-webkit-scrollbar {
  display: none;
}

.active {
  border-bottom: 2px solid rgb(237, 91, 0);
}

.box-nav::-webkit-scrollbar {
  display: none;
}

/* 下拉列表样式 */
.whole-nav {
  position: fixed;
  top: 50px;
  left: 0;
  width:100%;
  z-index: 10;
  padding: 10px 15px;
  background-color: rgb(242, 242, 242);
}

.whole-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.whole-title {
  font-size: 12px;
  color: #3c3c3c;
}

.whole-img-wrap {
  width: 14px;
}

.whole-img {
  width: 100%;
}

.whole-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.whole-item {
  font-size: 12px;
  color: #3c3c3c;
  width: 20%;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  text-align: center;
  background: #fff;
  margin: 3px 7px;
  padding: 3px;
}

.act {
  background-color: #fde0d5;
  border-color: #ff6700;
  color: #ff6700;
}


/* 遮罩层 */
.mask {
    position: fixed;
    top: 57px;
    width: 100%;
    height: 82.5%;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>