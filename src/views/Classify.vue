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
    <div class="wrap-box">
      <div class="left-middle absolute scroll-box" ref="left">
        <ul>
          <li
            class="item"
            v-for="(target, index) in dataItem"
            :key="index"
            :class="{ active: index == active }"
            @click="junpToTarget(index)"
          >
            {{ target.title }}
          </li>
        </ul>
      </div>
      <div class="right-box absolute scroll-box" ref="rightView">
        <ul>
          <li class="right-box absolute scroll-box" ref="rightView">
            <p class="title">
              <span>{{ target.title }}</span>
            </p>
            <div class="shop-item-wrap clear">
              <div
                class="shop-item"
                v-for="(shop, index) in target.children"
                :key="index"
                @click="$router.openPage(shop.link)"
              >
                <p><img :src="shop.src" alt="" /></p>
                <p class="title">{{ shop.title }}</p>
              </div>
            </div>
          </li>
        </ul>
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
import VueDB from "../vue-methods/vue-window.js";
import _ from "lodash";
let DB = new VueDB();

export default {
  title: "classification",
  data(){
    return{
      active:0,
      dataItem:[
         {
            name: '新品',
            children: [
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },{
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
           {
            name: '手机',
            children: [
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
           {
            name: '电视',
            children: [
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
              {
            name: '电脑',
            children: [
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              },
              {
                name: '小米5s',
                src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
                link: '/detail/1019'
              }
            ]
          },
          
         
        
      ]

    }
  },
























  methods: {
    jumpToTarget(index) {
      var scrollTop = this.offset[index];
      this.$refs.rightView.scrollTop = scrollTop;
      setTimeout(() => {
        this.active = index;
      }, 10);
    },

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
  mounted() {
    var scrollDB = {
      left: DB.getItemOnce("classification-left-scrollTop").toNumber(),
      right: DB.getItemOnce("classification-right-scrollTop").toNumber(),
    };
    setTimeout(() => {
      _.forEach(
        this.$refs.rightView.querySelectorAll(".item"),
        (value, key) => {
          this.offset.push(value.offsetHeight * key);
        }
      );

      var mySort = this.offset;

      this.$refs.rightView.addEventListener("scroll", () => {
        var eScrollTop = this.$refs.rightView.scrollTop;

        for (var indexer = 0; indexer < mySort.length; indexer++) {
          if (eScrollTop > mySort[indexer]) {
            this.active = indexer;
          }
        }
      });

      setTimeout(() => {
        this.$refs.left.scrollTop = scrollDB.left;
        this.$refs.rightView.scrollTop = scrollDB.right;
      }, 10);
    }, 100);
  },
  beforeRouteLeave(to, from, next) {
    DB.setItem("classification-left-scrollTop", this.$refs.left.scrollTop);
    DB.setItem(
      "classification-right-scrollTop",
      this.$refs.rightView.scrollTop
    );
    next();
  },
};
</script>
 
<style scoped type="text/sass" lang="sass">
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #747474;
}

/* 分类顶部 */
.box-top {
  padding: 12px;
  flex-shrink: 0;
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

.second-title1 {
  color: #ff6700;
}

.first-title1,
.third-title1,
.forth-title1 {
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
@import "../sass/util.sass";
.classification
  background-color: #fff

  .wrap-box
    position: absolute
    width: 100%
    top: getIphonese(100px)
    left: 0px
    bottom: $footerHeight

    .left-menu
      width: getIphonese(133px)
      left: 0px
      top: 0px
      bottom: 0px
      border-right: 1px solid #efefef
      overflow-x: hidden
      @include box-sizing

      ul
        padding-bottom: 0.44rem
      li.item
        margin-top: getIphonese(56px)
        text-align: center
        -webkit-transition: all .1s ease
        transition: all .1s ease
      li.item.active
        color: #fb7d34
        transform: scale(1.2)
    .right-box
      left: getIphonese(133px)
      top: 0px
      right: 0px
      bottom: 0px
      .item
        padding-top: 0.8rem
      .title
        text-align: center
        padding-bottom: 0.2rem
        span
          position: relative
          display: inline-block

          &:after,&:before
            display: inline-block
            width: getIphonese(34px)
            height: 1px
            top: 50%
            background-color: #e0e0e0
            position: absolute
            content: ''
          &:after
            left: getIphonese(-50px)
          &:before
            right: getIphonese(-50px)
      .shop-item-wrap
        .shop-item
          text-align: center
          float: left
          width: 33.3%
          color: #757575
          margin-bottom: 0.1rem
          @include f12px
          img
            width: getIphonese(80px)
            padding-bottom: 0.1rem


</style>