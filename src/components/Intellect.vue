<template>
  <!-- 智能页面 -->
  <div class="inte-box" @scroll="divScroll" id="back">
    <!-- 红包图片 -->
    <div class="pic-wrap" v-if="seen">
      <img src="../assets/intellect/红包.gif" class="pic" />
    </div>

    <!-- 回到顶部 -->
    <div class="back-top-wrap" v-if="seen" @click="backTop">
      <img src="../assets/intellect/返回顶部.png" class="backTop" />
    </div>

    <!-- 轮播图 -->
    <div class="inte-top">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="inte-top-img">
          <img src="../assets/intellect/1.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="inte-top-img">
          <img src="../assets/intellect/2.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="inte-top-img">
          <img src="../assets/intellect/3.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="inte-top-img">
          <img src="../assets/intellect/4.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="inte-top-img">
          <img src="../assets/intellect/5.jpg" class="top-img" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>

    <!-- 商品列表 -->
    <div class="inte-box-black"></div>
    <div class="inte-content">
      <div
        class="inte-content-wrap"
        v-for="item in content[0]"
        :key="item.index"
      >
        <img :src="item.img" class="inte-content-img" />
      </div>
    </div>

    <div class="inte-box-black"></div>
    <img src="../assets/intellect/21.jpg" class="inte-box-img" />

    <!-- 商品列表 -->
    <div class="inte-wrap">
      <div class="inte-item" v-for="item in content[1]" :key="item.index">
        <img :src="item.img" class="inte-wrap-img" />
        <p class="inte-wrap-title">{{ item.title }}</p>
        <p class="inte-wrap-des">{{ item.des }}</p>
        <p class="inte-wrap-price">
          {{ item.price }}
          <span class="inte-wrap-i">{{ item.i }}</span>
        </p>
      </div>
    </div>
    <img src="../assets/intellect/22.jpg" class="inte-box-img" />
    <img src="../assets/intellect/23.jpg" class="inte-box-img" />
    <img src="../assets/intellect/24.jpg" class="inte-box-img" />
    <img src="../assets/intellect/25.jpg" class="inte-box-img" />

    <!-- 商品列表 -->
    <div class="inte-wrap">
      <div class="inte-item" v-for="item in content[2]" :key="item.index">
        <img :src="item.img" class="inte-wrap-img" />
        <p class="inte-wrap-title">{{ item.title }}</p>
        <p class="inte-wrap-des">{{ item.des }}</p>
        <p class="inte-wrap-price">
          {{ item.price }}
          <span class="inte-wrap-i">{{ item.i }}</span>
        </p>
      </div>
    </div>
    <img src="../assets/intellect/22.jpg" class="inte-box-img" />

    <!-- 家电 -->
    <img src="../assets/intellect/26.jpg" class="inte-box-img" />
    <div class="inte-house-wrap">
      <div class="inte-house-item" v-for="item in content[3]" :key="item.item">
        <img :src="item.img" class="inte-wrap-img" />
        <p class="inte-wrap-title">{{ item.title }}</p>
        <p class="inte-wrap-des">{{ item.des }}</p>
        <p class="inte-wrap-price">
          {{ item.price }}
          <span class="inte-wrap-i">{{ item.i }}</span>
        </p>
      </div>
    </div>

    <!-- 智能穿戴 -->
    <img src="../assets/intellect/k.jpg" class="inte-box-img" />
    <div class="inte-house-wrap">
      <div class="inte-house-item" v-for="item in content[4]" :key="item.item">
        <img :src="item.img" class="inte-wrap-img" />
        <p class="inte-wrap-title">{{ item.title }}</p>
        <p class="inte-wrap-des">{{ item.des }}</p>
        <p class="inte-wrap-price">
          {{ item.price }}
          <span class="inte-wrap-i">{{ item.i }}</span>
        </p>
      </div>
    </div>

    <!-- 耳机音响 -->
    <img src="../assets/intellect/l.jpg" class="inte-box-img" />
    <div class="inte-house-wrap">
      <div class="inte-house-item" v-for="item in content[3]" :key="item.item">
        <img :src="item.img" class="inte-wrap-img" />
        <p class="inte-wrap-title">{{ item.title }}</p>
        <p class="inte-wrap-des">{{ item.des }}</p>
        <p class="inte-wrap-price">
          {{ item.price }}
          <span class="inte-wrap-i">{{ item.i }}</span>
        </p>
      </div>
    </div>

    <!-- 品质灯具 -->
    <img src="../assets/intellect/m.jpg" class="inte-box-img" />
    <div class="inte-house-wrap">
      <div class="inte-house-item" v-for="item in content[3]" :key="item.item">
        <img :src="item.img" class="inte-wrap-img" />
        <p class="inte-wrap-title">{{ item.title }}</p>
        <p class="inte-wrap-des">{{ item.des }}</p>
        <p class="inte-wrap-price">
          {{ item.price }}
          <span class="inte-wrap-i">{{ item.i }}</span>
        </p>
      </div>
    </div>

    <img src="../assets/intellect/l.jpg" class="inte-box-img" />
  </div>
</template>
 
<script>
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
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper;
        },
      },
    };
  },

  created() {
    let url = "http://localhost:5500/src/data/IntellectPage.json";
    let that = this;
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

  methods: {
    //回到页面顶部
    divScroll() {
      this.scrollTop = event.target.scrollTop;
      if (this.scrollTop > 200) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    },
    backTop() {
      let back = document.querySelector("#back");
      back.scrollTop = 0;
    },
  },
};
</script>
 
<style scoped>
.inte-box {
  flex-grow: 1;
  overflow: auto;
}

/* 轮播图 */
.top-img {
  width: 100%;
  height: 100%;
}

.inte-top {
  position: relative;
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 37%;
  --swiper-theme-color: #ffffff;
}

/* 商品列表 */
.inte-box-black {
  width: 100%;
  height: 10px;
  background: #fafafa;
}

.inte-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.inte-content-wrap {
  width: 20%;
}

.inte-content-img {
  width: 100%;
}

.inte-box-img {
  width: 100%;
}

/* 商品列表 */
.inte-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid #e3e3e3;
}
.inte-item {
  width: 33%;
  padding: 3px;
}
.inte-wrap-img {
  width: 100%;
  border-radius: 3px;
}
.inte-wrap-title {
  font-size: 12px;
  color: #3c3c3c;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.inte-wrap-des {
  font-size: 12px;
  color: #3c3c3c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 3px;
}
.inte-wrap-price {
  font-size: 12px;
  color: rgb(245, 75, 75);
  padding: 0 3px;
}
.inte-wrap-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}

/* 家电 */
.inte-house-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  padding: 3px;
  margin-top: -5px;
  background-color: rgb(240, 241, 243);
}
.inte-house-item {
  width: 32%;
  margin-bottom: 5px;
  background: #fff;
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