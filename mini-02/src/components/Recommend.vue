<template>
  <!-- 推荐组件 -->
  <div class="recommend-box" ref="contactList" @scroll="divScroll" id="back">
    <!-- 红包图片 -->
    <div class="pic-wrap" v-if="seen">
      <img src="../assets/recommend/红包.gif" class="pic" />
    </div>

    <!-- 回到顶部 -->
    <div class="back-top-wrap" v-if="seen" @click="backTop">
      <img src="../assets/recommend/返回顶部.png" class="backTop" />
    </div>

    <!-- 轮播图 -->
    <div class="recommend-top">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="recommend-top-img">
          <img src="../assets/recommend/轮播图1.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/recommend/轮播图2.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/recommend/轮播图3.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/recommend/轮播图4.jpeg" class="top-img" />
        </swiper-slide>
      </swiper>

      <div class="swiper-pagination" slot="pagination"></div>
    </div>

    <!-- 秒杀列表 -->
    <div class="recommend-content">
      <div class="content-wrap" v-for="item in content[0]" :key="item.img">
        <img :src="item.img" class="content-img" />
      </div>
    </div>

    <!-- 图片介绍 -->
    <div class="recommend-imgages-wrap">
      <div class="recommend-one">
        <img src="../assets/recommend/11.jpg" class="one-img" />
      </div>
      <div class="recommend-wrap">
        <div>
          <img src="../assets/recommend/12.jpg" class="one-img" />
        </div>
        <div>
          <img src="../assets/recommend/13.jpg" class="one-img" />
        </div>
      </div>
    </div>
    <div>
      <img src="../assets/recommend/14.jpg" class="recommend-img1" />
    </div>

    <!-- 每日精选手机 -->
    <div>
      <img src="../assets/recommend/15.jpg" class="recommend-img2" />
    </div>

    <!-- 手机列表 -->
    <div class="recommend-phone-wrap">
      <div v-for="item in content[1]" class="recommend-phone" :key="item.item">
        <img
          :src="item.img"
          class="recommend-phone-img"
          @click="desBtn(item.id)"
        />
        <div class="recommend-phone-content">
          <p class="recommend-phone-title">{{ item.title }}</p>
          <p class="recommend-phone-des">{{ item.des }}</p>
          <p class="recommend-phone-price">
            ￥{{ item.price }}
            <span class="recommend-phone-i">{{ item.i }}</span>
          </p>
          <p class="recommend-phone-btn">{{ item.btn }}</p>
        </div>
      </div>
    </div>
    <div class="recommend-phone-item">更多小米手机产品></div>

    <!-- 电视列表 -->
    <div>
      <img src="../assets/recommend/21.5.jpg" class="recommend-img3" />
    </div>
    <div class="recommend-television-wrap">
      <div v-for="item in content[2]" :key="item.index" class="recommend-phone">
        <img
          :src="item.img"
          class="recommend-phone-img"
          @click="btntv(item.id)"
        />
        <div class="recommend-television-content">
          <p class="recommend-television-title">{{ item.title }}</p>
          <p class="recommend-phone-des">{{ item.des }}</p>
          <p class="recommend-phone-price">
            ￥{{ item.price }}
            <span class="recommend-phone-i">{{ item.i }}</span>
          </p>
          <p class="recommend-phone-btn">{{ item.btn }}</p>
        </div>
      </div>
    </div>
    <div class="recommend-phone-item">更多小米电视产品></div>

    <!-- 笔记本列表 -->
    <div>
      <img src="../assets/recommend/28.jpg" class="recommend-img4" />
    </div>
    <div>
      <img src="../assets/recommend/29.jpg" class="recommend-img4" />
    </div>
    <div class="recommend-phone-wrap">
      <div v-for="item in content[3]" :key="item.item" class="recommend-phone">
        <img :src="item.img" alt class="recommend-phone-img" />
        <div class="recommend-phone-content">
          <p class="recommend-notebook-title">{{ item.title }}</p>
          <p class="recommend-phone-des">{{ item.des }}</p>
          <p class="recommend-phone-price">
            ￥{{ item.price }}
            <span class="recommend-phone-i">{{ item.i }}</span>
          </p>
          <p class="recommend-phone-btn">{{ item.btn }}</p>
        </div>
      </div>
    </div>

    <div class="recommend-phone-item">更多小米笔记本产品></div>

    <!-- 家电列表 -->
    <div>
      <img src="../assets/recommend/32.jpg" class="recommend-img4" />
    </div>
    <div>
      <img src="../assets/recommend/33.jpg" class="recommend-img4" />
    </div>

    <div class="recommend-household-wrap">
      <div
        v-for="item in content[4]"
        :key="item.item"
        class="recommend-household"
      >
        <img :src="item.img" alt class="recommend-household-img" />
        <div class="recommend-household-content">
          <p class="recommend-household-title">{{ item.title }}</p>
          <p class="recommend-household-des">{{ item.des }}</p>
          <p class="recommend-household-price">
            ￥{{ item.price }}
            <span class="recommend-household-i">{{ item.i }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="recommend-household-item">更多米家家电产品></div>

    <!-- 智能产品 -->
    <div>
      <img src="../assets/recommend/40.jpg" class="recommend-img4" />
    </div>
    <div>
      <img src="../assets/recommend/41.jpg" class="recommend-img4" />
    </div>
    <div class="recommend-mind-wrap">
      <div v-for="item in content[5]" :key="item.item" class="recommend-mind">
        <img :src="item.img" alt class="recommend-household-img" />
        <div class="recommend-mind-content">
          <p class="recommend-household-title">{{item.title}}</p>
          <p class="recommend-household-des">{{item.des}}</p>
          <p class="recommend-household-price">{{item.price}}
            <span class="recommend-household-i">{{item.i}}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="recommend-household-item">更多米家智能产品></div>

    <!-- 首页底部图片 -->
    <div class="recommend-images-box">
      <div class="recommend-images" v-for="item in content[6]" :key="item.item">
        <img :src="item.img" class="recommend-img" />
      </div>
    </div>
    <div class="recommend-pic">
      <img src="../assets/recommend/51.jpg" class="recommend-img5" />
    </div>

    <div>
      <img src="../assets/recommend/52.png" class="recommend-img6" />
    </div>
  </div>
</template>
 
<script scoped>
import axios from "axios";

export default {
  data() {
    return {
      seen: false,
      scrollTop: 0,
      content: [],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          dalay: 2300,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },

  created() {
    let that = this;
    let url = "http://localhost:5500/src/data/RecommendPage.json";
    axios
      .get(url)
      .then(function (res) {
        if (res.data.code == 200) {
          that.content = res.data.content;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  methods: {
    //回到顶部
    divScroll() {
      this.scrollTop = event.target.scrollTop;
      if (this.scrollTop >= 200) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    },
    backTop() {
      let back = document.querySelector("#back");
      back.scrollTop = 0;
    },
    desBtn(id) {
      this.$router.push({
        path: "/details",
        query: {
          id: id,
        },
      });
    },
    btntv(id) {
      this.$router.push({
        path: "/details",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>
 
<style scoped>
.recommend-box {
  flex-grow: 1;
  overflow: auto;
}

/* 轮播图 */

.top-img {
  width: 100%;
  height: 100%;
}

.recommend-top {
  position: relative;
}

.swiper-pagination {
  position: absolute;
  bottom: 15px;
  left: 43%;
  --swiper-theme-color: #ffffff;
}

/* 秒杀列表 */

.recommend-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.content-wrap {
  width: 20%;
}

.content-img {
  width: 100%;
}

/* 图片介绍 */

.one-img {
  width: 100%;
}

.recommend-imgages-wrap {
  padding: 8px 0;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.recommend-one {
  width: 50%;
}

.recommend-wrap {
  width: 50%;
  margin-left: 3px;
}

.recommend-img1 {
  width: 100%;
}

/* 每日精选手机 */

.recommend-img2 {
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
}

.recommend-phone-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}

.recommend-phone {
  width: 50%;
  padding: 5px;
}

.recommend-phone-content {
  text-align: center;
  padding: 3px 27px;
}

.recommend-phone-img {
  width: 100%;
}

.recommend-phone-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
}

.recommend-phone-des {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommend-phone-price {
  font-size: 12px;
  color: #ea625b;
}

.recommend-phone-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}

.recommend-phone-btn {
  background: #ea625b;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 5px 0;
}

.recommend-phone-item {
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
  padding: 15px;
}

/* 电视列表 */

.recommend-img3 {
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
}

.recommend-television-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}

.recommend-television-content {
  text-align: center;
  padding: 3px 20px;
}

.recommend-television-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 8px;
}

/* 笔记本列表 */

.recommend-img4 {
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
}

.recommend-notebook-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 家电列表 */
.recommend-household-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}

.recommend-household {
  width: 49.8%;
}

.recommend-household-img {
  width: 100%;
}

.recommend-household-content {
  padding: 3px 15px 10px 15px;
}

.recommend-household-title {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommend-household-des {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommend-household-price {
  font-size: 12px;
  color: #ea625b;
}

.recommend-household-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}

.recommend-household-item {
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
  padding: 15px;
}

/* 智能产品 */
.recommend-mind-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}

.recommend-mind {
  width: 50%;
}

.recommend-mind-content {
  margin-left: 10px;
}

/* 底部图片 */
.recommend-images-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.recommend-images {
  width: 49.8%;
}

.recommend-img {
  width: 100%;
}

.recommend-img5 {
  width: 100%;
}

.recommend-img6 {
  width: 100%;
}


/* 红包图片 */

.pic-wrap {
  position: fixed;
  bottom: 115px;
  right: 7px;
  width: 16%;
}

.pic {
  width: 100%;
}

/* 回到顶部 */

.back-top-wrap {
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 10%;
}

.backTop {
  width: 100%;
}
</style>