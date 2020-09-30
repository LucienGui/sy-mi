<template>
  <div class="bigbox">
    <div class="detail-topbox" ref="topbox">
      <div class="detail-topbox-item" v-if="seen" @click="goclick">
        <img src="../assets/details/向左圆箭头.png" />
      </div>
      <div class="detail-topbox-item topelse" v-else @click="goclick">
        <img src="../assets/details/向左.png" />
      </div>

      <div class="detail-topbox-item1" v-if="isdis">
        <span class="topbox-item1-list">商品</span>
        <span class="topbox-item1-list">评价</span>
        <span class="topbox-item1-list">详情</span>
      </div>

      <div class="detail-topbox-item" v-if="seen">
        <img src="../assets/details/分享.png" />
      </div>
      <div class="detail-topbox-item topelse" v-else>
        <img src="../assets/details/分享1.png" />
      </div>
    </div>
    <div class="datail-center-item14 posibox" v-if="seen11">商品介绍</div>
    <!-- 中间 -->
    <transition>
      <div class="detail-centerbox" @scroll="myscroll" ref="scrollbox">
        <!-- 轮播图 -->
        <div class="lunbobox">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide
              class="box"
              v-for="item in content[0]"
              :key="item.item"
            >
              <img :src="item.img" class="img11" />
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>

        <div class="pricebox">
          <span>￥</span>
          <span
            class="pricebox-span2"
            v-for="item in content[1]"
            :key="item.item"
            >{{ item.price }}</span
          >
        </div>
        <div class="detail-center-item1">
          <img src="../assets/details/en.jpg" />
          <span v-for="item in content[2]" :key="item.item">{{
            item.title
          }}</span>
        </div>
        <div
          class="detail-center-item2"
          v-for="item in content3"
          :key="item.item"
        >
          <div class="detail-item2-list">
            <img :src="item.one" />
            <span>{{ item.title1 }}</span>
          </div>
          <div class="detail-item2-list">
            <img :src="item.two" />
            <span>{{ item.title2 }}</span>
          </div>
          <div class="detail-item2-list lastimg">
            <img :src="item.three" />
            <span>{{ item.title3 }}</span>
          </div>
          <span class="detail-center-item3">{{ item.title4 }}</span>
          <div class="kong"></div>
          <div class="detail-center-item4">
            <div>已选</div>
            <div class="detail-item4-list listt1">
              <span>{{ item.title5 }}</span>
              <img src="../assets/details/箭头 right.png" />
            </div>
          </div>
          <div class="detail-center-item4">
            <div>送至</div>
            <div class="detail-item4-list">
              <div>
                <img src="../assets/details/定位.png" />
                <span>苏州市 工业园区</span>
                <span style="color: #ff6700; margin-left: 5px">有现货</span>
              </div>
              <img src="../assets/details/箭头 right.png" />
            </div>
          </div>
          <div class="detail-center-item5">
            <div class="detail-item5-list1">
              <div class="detail-item5-list1box">
                <img src="../assets/details/勾.png" alt />
                <span>小米自营</span>
              </div>
              <div class="detail-item5-list1box">
                <img src="../assets/details/勾.png" alt />
                <span>小米发货</span>
              </div>
              <div class="detail-item5-list1box">
                <img src="../assets/details/勾.png" alt />
                <span>7天无理由退货</span>
              </div>
            </div>
            <div class="detail-item5-list2">
              <img src="../assets/details/箭头 right.png" />
            </div>
          </div>
          <div class="detail-center-item6">推荐套餐</div>
          <div class="detail-center-item8">
            <div class="detail-item8-list box">
              <img :src="item.img" />
              <p class="detail-item8-list-p1">{{ item.title6 }}</p>
              <p class="detail-item8-list-p2" ref="price1">
                ￥{{ item.price1 }}
              </p>
            </div>
            <div class="detail-item8-listt1 boxx">+</div>
            <div class="detail-item8-list">
              <img :src="item.img2" class="item8-img" />
              <p class="detail-item8-list-p1">{{ item.title7 }}</p>
              <p class="detail-item8-list-p2">￥{{ item.price2 }}</p>
              <img
                src="../assets/details/huigou.png"
                class="gouimg"
                v-if="seen22"
                @click="gou1click"
              />
              <img
                src="../assets/details/honggou.png"
                class="gouimg"
                v-else
                @click="gou1click"
              />
            </div>
            <div class="detail-item8-list">
              <img :src="item.img3" class="item8-img" />
              <p class="detail-item8-list-p1">{{ item.title8 }}</p>
              <p class="detail-item8-list-p2">￥{{ item.price3 }}</p>
              <img
                src="../assets/details/huigou.png"
                class="gouimg"
                v-if="seen33"
                @click="gou2click"
              />
              <img
                src="../assets/details/honggou.png"
                class="gouimg"
                v-else
                @click="gou2click"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 底部 -->
    <div class="detail-bottombox"></div>
    <!-- 遮罩层 -->
    <div class="popbox"></div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  data() {
    return {
      seen: true,
      num22:0,
      num33:0,
      isnum:1,
      isdis: false,
      seen11: false,
      seen22: true,
      seen33: true,
      scrolltop: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          //   clickable: true, // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 2300, //时间
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
        loop: true,
      },
      content: [],
      content3: [],
      content33:[],
      content44:[]
    };
  },

  //axios请求
  created() {
    let url = `http://127.0.0.1:5500/src/data/DetailPage${this.$route.query.id}.json`;
    console.log(this.$route);
    let that = this;
    console.log("成功");
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
          console.log(response);
          that.content = response.data.content;
          that.content3 = response.data.content[3];
          console.log(response.data.content[3]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  methods: {
    // 推荐商品下面的勾
    gou1click() {
      this.num22++;
      if (this.num22 % 2 == 0) {
        this.seen22 = true;
        this.isnum--;
        this.content44[1].checked = false;
      } else {
        this.seen22 = false;
        this.isnum++;
        this.content44[1].checked = true;
      }
    },
    gou2click() {
      this.num33++;
      if (this.num33 % 2 == 0) {
        this.seen33 = true;
        this.isnum--;
        this.content44[2].checked = false;
      } else {
        this.seen33 = false;
        this.isnum++;
        this.content44[2].checked = true;
      }
    },

    // 返回方法
    goclick() {
      this.$router.go(-1);
    },
    // scroll事件
    myscroll(event) {
      this.scrolltop = event.target.scrollTop;
    },
  },
};
</script>
 
<style scoped>
.bigbox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.detail-topbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  height: 60px;
}

.detail-topbox-item img {
  width: 32px;
  height: 32px;
}

.posibox {
  position: fixed;
  top: 52px;
  left: 0;
  z-index: 5;
  width: 100%;
  text-align: center;
  background-color: white;
}

.detail-topbox-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.topelse img {
  width: 22px;
  height: 22px;
}

.detail-centerbox {
  flex-grow: 1;
  overflow: auto;
}

.datail-center-item14 {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #ff6700;
  font-size: 14px;
}

/* 轮播图 */
.lunbobox {
  position: relative;
  /* z-index: 20; */
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 82%;
  color: white;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  width: 40px;
  height: 25px;
  text-align: center;
  line-height: 25px;
}

.box img {
  width: 100%;
  height: 100%;
}
</style>