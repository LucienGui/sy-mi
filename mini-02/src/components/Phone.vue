<template>
  <!-- 手机页 -->
  <div class="phone-box" ref="contactList" @scroll="divScroll" id="back">
    <!-- 红包图片 -->
    <div class="pic-wrap" v-if="seen">
      <img src="../assets/phone/红包.gif" class="pic" />
    </div>

    <!-- 回到顶部 -->
    <div class="back-top-wrap" v-if="seen" @click="backTop">
      <img src="../assets/phone/返回顶部.png" class="backTop" />
    </div>

    <!-- 轮播图 -->
    <div class="phone-top">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="phone-top-img">
          <img src="../assets/phone/1.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="phone-top-img">
          <img src="../assets/phone/2.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="phone-top-img">
          <img src="../assets/phone/3.jpg" class="top-img" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>

    <!-- 产品列表 -->
    <div class="phone-content">
      <div class="phone-item" v-for="item in content[0]" :key="item.index">
        <img :src="item.img" class="phone-item-img">
        <div>
          <div class="phone-bottom-top">
            <p class="phone-item-title">{{item.title}}</p>
            <p class="phone-item-price">{{item.price}}
              <span class="phone-item-i">{{item.i}}</span>
            </p>
          </div>
          <div class="phone-bottom-bottom">
            <p class="phone-item-des">{{item.des}}</p>
            <div class="phone-btn-box">
              <p class="phone-item-btn">{{item.btn}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品列表 -->
    <div class="phone-bottom">
      <div class="phone-item-wrap" v-for="item in content[1]" :key="item.index">
        <img :src="item.img" class="phone-bottom-img">
        <div class="phone-bottom-content">
          <p class="phone-item-title title1">{{item.title}}</p>
          <p class="phone-item-des">{{item.des}}</p>
          <p class="phone-item-price">{{item.price}}
            <span class="phone-item-i">{{item.i}}</span>
          </p>
          <div class="phone-btn-box2">
            <p class="phone-item-btn">{{item.btn}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";

export default {
  data() {
    return {
      seen: false,
      scrollTop: 0,
      content:[],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2300,
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
    let url = "http://127.0.0.1:5500/src/data/PhonePage.json";
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
.phone-box {
  flex-grow: 1;
  overflow: auto;
  background: rgb(230, 231, 251);
}

/* 轮播图 */
.phone-top {
  position: relative;
}

.top-img {
  width: 100%;
  height: 100%;
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 40%;
  --swiper-theme-color: #ffffff;
}

/* 产品列表 */
.phone-item {
  margin: 5px;
  background: #fff;
}

.phone-item-img {
  width: 100%;
}

.phone-bottom-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}

.phone-bottom-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}

.phone-item-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
}

.phone-item-des {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 5px;
}

.phone-item-price {
  font-size: 12px;
  color: #ea625b;
}

.phone-item-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}

.phone-item-btn {
  background: #ea625b;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 5px 10px;
}

.phone-btn-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

/* 商品列表 */
.phone-item-wrap {
  background: rgb(230, 231, 251);
}

.phone-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  background: #f5f5f5;
}

.phone-item-wrap {
  width: 50%;
  padding: 3px;
}

.phone-bottom-img {
  width: 100%;
}

.phone-bottom-content {
  background: #fff;
  margin-top: -4px;
  padding: 10px 10px;
}

.title1 {
  font-size: 10px;
}

.phone-btn-box2 {
  margin: 3px 25px;
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