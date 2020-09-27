<template>
  <!-- 家电 -->
  <div class="house-box" @scroll="divScroll" id="back">
    <!-- 红包图片 -->
    <div class="pic-wrap" v-if="seen">
      <img src="../assets/intellect/红包.gif" class="pic" />
    </div>

    <!-- 回到顶部 -->
    <div class="back-top-wrap" v-if="seen" @click="backTop">
      <img src="../assets/intellect/返回顶部.png" class="backTop" />
    </div>

    <div>
      <img src="../assets/household/01.jpg" class="note-box-img" />
    </div>

    <!-- 商品 -->
    <div class="house-wrap">
      <div class="house-item" v-for="item in content" :key="item.item">
        <img :src="item.img" class="house-item-img" />
        <p class="house-item-title">{{ item.title }}</p>
        <p class="house-item-des">{{ item.des }}</p>
        <p class="house-item-price">
          {{ item.price }}
          <span class="house-item-i">{{ item.i }}</span>
        </p>
      </div>
    </div>

    <img src="../assets/intellect/21.jpg" class="inte-box-img" />
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
    };
  },

  created() {
    let url = `http://127.0.0.1:5500/src/data/HouseholdPage.json`;
    let that = this;
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
          console.log(response);
          that.content = response.data.content;
          // console.log(that.list);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    // 回到顶部
    divScroll() {
      this.scrollTop = event.target.scrollTop;
      // console.log(this.scrollTop);
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
.house-box {
  flex-grow: 1;
  overflow: auto;
}
.note-box-img {
  width: 100%;
  height: 100%;
}

/* 商品 */
.house-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(237, 216, 253);
  margin-top: -3px;
  padding: 0 5px 5px 5px;
}

.house-item {
  width: 32.7%;
  background: #fff;
  padding-bottom: 7px;
}

.house-item-img {
  width: 100%;
}

.house-item-title {
  font-size: 12px;
  color: #3c3c3c;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 10px;
}

.house-item-des {
  font-size: 12px;
  color: #3c3c3c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
}

.house-item-price {
  font-size: 12px;
  color: rgb(245, 75, 75);
  font-weight: bolder;
  text-align: center;
}

.house-item-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}

.inte-box-img {
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