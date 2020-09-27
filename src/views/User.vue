<template>
  <div class="app-init scroll-box mine-page footer-hack">
       <div class="user-box public-padding">
           <div class="face-book">
              <img @click="$router.openPage('/pay')" src="" alt="">
           </div>
           <p class="jump" @click="$router.openPage( '/pay')">登录/注册</p>
        </div> 
        <div class="dingdan public-padding p-item" @click="$router.openPage( '/pay')">
         我的订单
        </div>
        <div class="tab-box clear">
           <div class="item" @click="$router.openPage( '/pay')">
              <p  class="icon">
                 <span class="iconfont icon-qianbao">&#xe63c;</span>
              </p>
              <p class="pay">待付款</p>
           </div>
            <div class="item" @click="$router.openPage( '/pay')">
              <p  class="icon">
                 <span class="iconfont icon-qianbao">&#xe6a7;</span>
              </p>
              <p class="pay">待收货</p>
           </div>
            <div class="item" @click="$router.openPage( '/pay')">
              <p  class="icon">
                 <span class="iconfont icon-qianbao">&#xe6fb;</span>
              </p>
              <p class="pay">退换修</p>
           </div>
           <div class="new-wrap">
              <div class="dingdan public-padding p-item" @click="$router.openPage( '/pay')">
                 <span class="iconfont icon-huiyuan" style="color: &#xe6a8;"></span>
                 <span>会员福利</span>
              </div>
               <div class="dingdan public-padding p-item" @click="$router.openPage( '/pay')">
                 <span class="iconfont icon-huiyuan" style="color: &#xe6a9;"></span>
                 <span>我的优惠</span>
              </div>

              <div class="new-wrap">
                  <dvi class="dingdan publi-padding p-item" @click="$router.openPage('/pay')">
                      <span class="incofont icon-fuwuerji2" style="color:&#xe6ab;"></span>
                      <span>服务中心</span>
                  </dvi>
                   <dvi class="dingdan publi-padding p-item" @click="$router.openPage('/pay')">
                      <span class="incofont icon-fuwuerji2" style="color:&#xe73b;"></span>
                      <span>小米之家</span>
                  </dvi>
                  <div class="new-wrap">
                  <dvi class="dingdan publi-padding p-item" @click="$router.openPage('/pay')">
                      <span class="incofont icon-F" style="color:&#xe6ac;"></span>
                      <span>我的F码</span>
                  </dvi>
                   <dvi class="dingdan publi-padding p-item" @click="$router.openPage('/pay')">
                      <span class="incofont icon-F" style="color:&#xe6b1;"></span>
                      <span>礼物码兑换</span>
                  </dvi>
                  <div class="new-wrap">
                     <div class="dingdan public-padding p-item" @click="$router.openPage('/pay')">
                           <span class="iconfont icon-shezhi" style="color: #818C99;"></span>
                              <span>设置</span>
                          </div>
                       </div> 




              </div>

           </div>







        </div>
       













    <!-- 登录界面底部 -->
    <div class="box-bottom">
      <div class="bottom-btn" @click="homeBtn">
        <img src="../assets/home/首页2.png" class="bottom-img" />
        <div class="bottom-title first-title3">首页</div>
      </div>
      <div class="bottom-btn" @click="classifyBtn">
        <img src="../assets/home/分类2.png" class="bottom-img" />
        <div class="bottom-title second-title3">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/星球2.png" class="bottom-img" />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn" @click="cartBtn">
        <img src="../assets/home/购物车2.png" class="bottom-img" />
        <div class="bottom-title third-title3">购物车</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/home/我的1.png" class="bottom-img" />
        <div class="bottom-title forth-title3">我的</div>
      </div>
    </div>
  </div>
</template>
 
<script scoped type="text/ecmascript-6">
export default {
  pay:"mine-page",
  methods: {
    // 页面切换
    homeBtn() {
      this.$router.push({
        path: "/",
      });
    },
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

/* 登录界面底部 */
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

.forth-title3 {
  color: #ff6700;
}

.first-title3,
.second-title3,
.third-title3 {
  color: #747474;
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