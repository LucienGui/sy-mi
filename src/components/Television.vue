<template>
  <!-- 电视 -->
  <div class="tele-box" @scroll="divScroll" id="back">
    <!-- 红包图片 -->
    <div class="pic-wrap" v-if="seen">
      <img src="../assets/intellect/红包.gif" class="pic" />
    </div>

    <!-- 回到顶部 -->
    <div class="back-top-wrap" v-if="seen" @click="backTop">
      <img src="../assets/intellect/返回顶部.png" class="backTop" />
    </div>

    <!-- 商品 -->
    <div class="tele-content">
      <div
        class="tele-content-wrap"
        v-for="item in content[0]"
        :key="item.item"
      >
        <img :src="item.img" class="tele-wrap-img" />
        <p class="tele-wrap-title">{{ item.title }}</p>
        <p class="tele-wrap-des">{{ item.des }}</p>
        <p class="tele-wrap-price">
          {{ item.price }}
          <span class="tele-wrap-i">{{ item.i }}</span>
        </p>
        <div class="tele-btn-box">
          <p class="tele-wrap-btn">{{ item.btn }}</p>
        </div>
      </div>
    </div>
    <div>
      <img src="../assets/television/06.jpg" class="tele-box-img" />
    </div>
    <div class="tele-content content1">
      <div class="tele-content-wrap" v-for="item in content[1]" :key="item.item">
        <img :src="item.img" class="tele-wrap-img" />
        <p class="tele-wrap-title">{{ item.title }}</p>
        <p class="tele-wrap-des">{{ item.des }}</p>
        <p class="tele-wrap-price">
          {{ item.price }}
          <span class="tele-wrap-i">{{ item.i }}</span>
        </p>
        <div class="tele-btn-box">
          <p class="tele-wrap-btn">{{ item.btn }}</p>
        </div>
      </div>
    </div>

    <div>
      <img src="../assets/television/09.jpg" class="tele-box-img img1" />
    </div>
    <div class="tele-item">
      <img src="../assets/television/10.jpg" class="tele-item-img" />
      <div class="tele-item-content">
        <div class="tele-bottom-top">
          <p class="tele-item-title">米家激光投影电视 1S 4K</p>
          <p class="tele-item-price">
            ￥12999
            <span class="tele-item-i">￥14999</span>
          </p>
        </div>
        <div class="tele-bottom-bottom">
          <p class="tele-item-des">更自然的色彩，更真实的还原</p>
          <div class="tele-btn-box1">
            <p class="tele-item-btn">立即购买</p>
          </div>
        </div>
      </div>
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
    };
  },
  created() {
    let url = "http://127.0.0.1:5500/src/data/TelevisionPage.json";
    let that = this;
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
          that.content = response.data.content;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
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
.tele-box {
  flex-grow: 1;
  overflow: auto;
  background-color: rgb(255, 235, 220);
}

.tele-box-img {
  width: 100%;
  height: 100%;
}
.img1 {
  margin-top: 10px;
}
/* 商品 */
.tele-wrap-img {
  width: 100%;
  border-radius: 5px;
}
.tele-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
  text-align: center;
}
.tele-content-wrap {
  width: 49.5%;
  background: #fff;
  border-radius: 5px;
  margin-top: 8px;
}
.tele-wrap-title {
  font-size: 12px;
  color: #3c3c3c;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tele-wrap-des {
  font-size: 12px;
  color: #3c3c3c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
}
.tele-wrap-price {
  font-size: 12px;
  color: rgb(245, 75, 75);
  padding: 0 3px;
}
.tele-wrap-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}
.tele-wrap-btn {
  background: #ea625b;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 5px 0px;
}
.tele-btn-box {
  padding: 2px 40px 10px 40px;
}

.content1 {
  background: #fff;
}
.tele-item {
  background-color: rgb(202, 254, 245);
  margin-top: -5px;
  padding: 5px;
}
.tele-item-img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.tele-item-content {
  background: #fff;
  margin-top: -5px;
  border-radius: 5px;
}
.tele-item-title {
  font-size: 14px;
  color: #3c3c3c;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tele-item-des {
  font-size: 12px;
  color: #3c3c3c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* padding: 0 10px; */
}
.tele-item-price {
  font-size: 14px;
  color: rgb(245, 75, 75);
  /* padding: 0 3px; */
}
.tele-item-i {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}
.tele-item-btn {
  background: #ea625b;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 5px 20px;
}
.tele-bottom-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
.tele-bottom-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
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