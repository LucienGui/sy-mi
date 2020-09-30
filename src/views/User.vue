<template>
  <div class="app-top">
    <div class="box">
      <div class="box-img">
        <div class="image">
          <img src="../../src/assets/image/denglv/1.png" />
        </div>
        <div class="pp" @click="lOg" ><p>登入/注册</p></div> 
      </div>
    </div>
    <div class="content">
      <div class="order">
        <div class="order-my">
          <p>我的订单</p>
        </div>
        <div class="order-all iconfont">
          <p>全部订单 &#xe668;</p>
        </div>
      </div>
      <div class="xian"></div>
      <div class="boxspon">
        <div class="tu">
          <div class="pay-one">
            <img src="../../src/icon-img/1.png" />
            <div class="pay-o">待付款</div>
          </div>
          <div class="pay-one">
            <img src="../../src/icon-img/2.png" />
            <div class="pay-o">待收货</div>
          </div>
          <div class="pay-one">
            <img src="../../src/icon-img/3.png" />
            <div class="pay-o">退换修</div>
          </div>
        </div>
         <div class="xiaoone"></div>


      </div>
      <div class="VIP">
          <div class="head">
              <img src="../../src/icon-img/4.png">
               <p>会员中心</p>
          </div>
          <div class="huan">
             <div class="tiao"></div>
          </div>
           <div class="head">
              <img src="../../src/icon-img/5.png">
               <p>我的优惠</p>
          </div>
          <div class="xiaoone"></div>
          <div class="head">
              <img src="../../src/icon-img/6.png">
               <p>服务中心</p>
          </div>
          <div class="huan">
             <div class="tiao"></div>
          </div>
           <div class="head">
              <img src="../../src/icon-img/7.png">
               <p>小米之家</p>
          </div>
          <div class="xiaoone"></div>
          <div class="head">
              <img src="../../src/icon-img/8.png">
               <p>我的F码</p>
          </div>
          <div class="huan">
             <div class="tiao"></div>
          </div>
           <div class="head">
              <img src="../../src/icon-img/9.png">
               <p>礼物码兑换</p>
          </div>
          <div class="xiaoone"></div>
          <div class="head">
              <img src="../../src/icon-img/10.png">
               <p>设置</p>
          </div>
          <div class="kong"></div>
          
            
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
  pay: "mine-page",
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
    lOg(){
      this.$router.push({
        path:"/login",
      });
    }
  },
};
</script>
 
<style scoped>

.app-top{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
   overflow-x: hidden;
  
  overflow-y: scroll;
 
}
.pp {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  color: white;
}
.image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: -40px;
  margin-right: 10px;
}
.image img {
  width: 45px;
  height: 45px;
}

.box {
  width: 100%;
  height: 20%;
  flex-shrink: 0;
}
.order {
  width: 100%;
  height: 40px;
}
.order-my {
  width: 70px;
  height: 20px;
  display: block;
  margin-top: 15px;
}
.order-all {
  width: 100px;
  height: 20px;
  margin-left: 75%;
  display: block;
  margin-top: -18px;
}
.xian {
  border: 1px solid;
  color: rgba(0, 0, 0, 0.15);
}
.boxspon {
  border-top: 10px;
  width: 100%;
  height: 25%;
}
.tu{
  width: 100%;
  height: 88px;
   display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}
.pay-one {
  width: 60px;
  height: 60px;
 
}
.pay-one > img {
  width: 75%;
  height: 75%;
}

.pay-o {
  color: #747474;
  font-size: 6px;
}
.kong{
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.10) ;
}
.VIP{
   width: 100%;
    height: 30%;
    

}
.head{
   width: 120px;
   height: 40px;
   display: flex;
    flex-wrap: nowrap;
     justify-content: space-evenly;
}
.head img{
  width: 40%;
  height: 100%;
}
.head p{
    color: black;
    font-size: 5px;
    display: block;
    width: 65px;
    height: 40px;
    padding: 8px;
}
.huan{
   width: 100%;
   
  
}
 .huan>.tiao{
   width: 80%;
   border: 2px solid;
   color: #f5f5f5;
   align-content: center;
   height: 3px;
   margin-left: 35px;
 }
 .button{
   width: 100%;
   height: 25%;
   color: #747474;
 }
 .button{
   width: 100%;
   height: 25%;
   color:  #747474;

 }
 .button>.yan{
     width: 100%;
     height: 100%;
 }
 .content{
   flex-grow: 1;
   overflow: auto;
 }
 .box-bottom{
   flex-shrink: 0;
 }
 .xiaoone{
  border: 5px solid;
  color: #f5f5f5;
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
.box {
  background-color: #f37d0f;
  width: 100%;
  height: 15%;
}
.box-img {
  position: relative;
  display: flex;
  align-items: center;
}
.box-img img {
  width: 60px;
  height: 60px;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 60px;
}
.span {
  color: #fff;
  font-size: 0.24rem;
  text-align: left;
  display: block;
  margin-right: 20px;
  width: 60px;
  height: 30px;
  margin-left: 80px;
  margin-top: -75px;
  font-size: 13px;
}
.content {
  width: 100%;
  height: 80%;
  background: white;
}



</style>