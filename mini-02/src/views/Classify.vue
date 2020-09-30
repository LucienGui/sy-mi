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
    <div class="middle-top">
      <div class="listleft">
        <div class="left">
          <div
            class="rigth-name ativen"
            @click="leftbtn(index + 1)"
            v-for="(item, index) in leftList"
            :key="index"
          >
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
      <div class="listright">
        <div class="left-wrap">
          <div class="rigth">
            <div
              class="left-name"
              v-for="(item, index) in rightList"
              :key="index"
            >
              <div class="one">
                <img src="../../src/assets/image/banner/big-1.jpg" />
              </div>
              <div class="zi">
                <p>{{ item.title }}</p>
              </div>
              <div class="munber">
                <div class="shou">
                  <img src="../../src/assets/image/minumber/tu-p1.png" alt="" />
                  <div class="small">
                    <p>小米10至尊版</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/minumber/tu-p2.png" alt="" />
                  <div class="small">
                    <p>小米10青春版</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/minumber/tu-p3.png" alt="" />
                  <div class="small">
                    <p>小米10Pro</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/minumber/tu-p3.png" alt="" />
                  <div class="small">
                    <p>小米10</p>
                  </div>
                </div>
              </div>
              <div class="phone">
                <img src="../../src/assets/image/banner/banner-p.jpg" alt="" />
              </div>
              <div class="zi">
                <p>小米MIX系列</p>
              </div>
              <div class="shouMix">
                <div class="Mix">
                  <img src="../../src/assets/image/mi-Mix/tu.png" alt="" />
                </div>
                <div class="small">
                  <p>小米MIX Alpha</p>
                </div>
              </div>
              <div class="phone">
                <img src="../../src/assets/image/banner/banner-p1.jpg" alt="" />
              </div>
              <div class="zi">
                <p>小米手机配件</p>
              </div>
              <div class="parts">
                <div class="shou">
                  <img
                    src="../../src/assets/image/phone-spare/tu-p1.png"
                    alt=""
                  />
                  <div class="small">
                    <p>充电宝</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/phone-spare/tu-p2.png" alt="" />
                  <div class="small">
                    <p>无线充</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/phone-spare/tu-p3.png" alt="" />
                  <div class="small">
                    <p>充电器</p>
                  </div>
                </div>
                 <div class="shou">
                  <img src="../../src/assets/image/phone-spare/tu-p4.png" alt="" />
                  <div class="small">
                    <p>自拍杆</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/phone-spare/tu-p5.png" alt="" />
                  <div class="small">
                    <p>小米手机保护壳</p>
                  </div>
                </div>
                <div class="shou">
                  <img src="../../src/assets/image/phone-spare/tu-p6.png" alt="" />
                  <div class="small">
                    <p>小米手机保护膜</p>
                  </div>
                </div>
                 <div class="shou">
                  <img src="../../src/assets/image/phone-spare/tu-p7.png" alt="" />
                  <div class="small">
                    <p>数据线</p>
                  </div>
                </div>



              </div>
                <div class="phone">
                <img src="../../src/assets/image/banner/banner-p2.jpg" alt="" />
              </div>
               <div class="one">
                <img src="../../src/assets/image/banner/big.jpg" />
              </div>
              <div class="zi">
                <p>Redmi红米 K系列</p>
              </div>
              <div class="Redmi">
                 <div class="shou">
                    <img src="../assets/image/Redmi-k/tu-p1.png" alt="" />
                    <div class="small">
                       <p>Redmik30 </p>
                    </div>
                </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-k/tu-p2.png" alt="" />
                     <div class="small">
                        <p>Redmik30i</p>
                     </div>
                 </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-k/tu-p3.png" alt="" />
                     <div class="small">
                        <p>Redmi k30</p>
                     </div>
                 </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-k/tu-p4.png" alt="" />
                     <div class="small">
                        <p>K30 Pro</p>
                     </div>
                 </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-k/tu-p5.png" alt="" />
                     <div class="small">
                        <p>K30 Pro</p>
                     </div>
                 </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-k/tu-p6.png" alt="" />
                     <div class="small">
                        <p>K30 至尊版</p>
                     </div>
                 </div>
            </div> 
              <div class="phone">
                 <img src="../../src/assets/image/banner/banner-p3.jpg" alt="" />
              </div>
               <div class="zi">
                <p>Redmi红米 X系列</p>
              </div>
              <div class="RedmiX">
                 <div class="shou">
                    <img src="../assets/image/Redmi-x/tu-p1.png" alt="" />
                     <div class="small">
                        <p>10X 5G</p>
                     </div>
                  </div>
                  <div class="shou">
                    <img src="../assets/image/Redmi-x/tu-p2.png" alt="" />
                     <div class="small">
                        <p>10X Pro</p>
                      </div>
                  </div>
                  <div class="shou">
                     <img src="../assets/image/Redmi-x/tu-p3.png" alt="" />
                      <div class="small">
                        <p>10X 4G</p>
                     </div>
                  </div>
              </div>
               <div class="phone">
                 <img src="../../src/assets/image/banner/banner-p4.jpg" alt="" />
              </div>
               <div class="zi">
                <p>Redmi红米 数字系列</p>
              </div>
              <div class="Redmi">
                 <div class="shou">
                    <img src="../assets/image/Redmi-red-number/tu-p1.png" alt="" />
                    <div class="small">
                       <p>Redmi 9A </p>
                    </div>
                </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-red-number/tu-p2.png" alt="" />
                    <div class="small">
                       <p>Redmi 9 </p>
                    </div>
                </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-red-number/tu-p3.png" alt="" />
                    <div class="small">
                       <p>Redmi 8 </p>
                    </div>
                </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-red-number/tu-p4.png" alt="" />
                    <div class="small">
                       <p>Redmi 8A </p>
                    </div>
                </div>
                 <div class="shou">
                    <img src="../assets/image/Redmi-red-number/tu-p5.png" alt="" />
                    <div class="small">
                       <p>Redmi 7A </p>
                    </div>
                </div>
            </div>
              <div class="phone">
                 <img src="../../src/assets/image/banner/banner-p5.jpg" alt="" />

              </div>
              <div class="zi">
                  <p>Redmi手机配件</p>
              </div>
               <div class="RedmiX">
                 <div class="shou">
                    <img src="../assets/image/Redmi-spare/tu-p1.png" alt="" />
                    <div class="small">
                       <p>Redmi 7A </p>
                    </div>
                </div>
                
            </div>
             <div class="phone">
                   <img src="../../src/assets/image/banner/banner-p6.jpg" alt="" />

              </div>
              <div class="one">
                <img src="../../src/assets/image/banner/big-2.jpg" />
              </div>
               <div class="zi">
                  <p>黑鲨游戏手机</p>
              </div>
              <div class="RedmiX">
                 <div class="shou">
                    <img src="../assets/image/black-p/tu-p1.png" alt="" />
                    <div class="small">
                       <p>黑鲨手机3S</p>
                    </div>
                </div>
                 <div class="shou">
                    <img src="../assets/image/black-p/tu-p2.png" alt="" />
                    <div class="small">
                       <p>黑鲨手机3 </p>
                    </div>
                </div>



              </div>
               <div class="zi">
                  <p>黑鲨手机配件</p>
              </div>
               <div class="parts">
                    <div class="shou">
                      <img src="../assets/image/black-spare/tu-p1.png" alt="" />
                      <div class="small">
                        <p>电竞手游 </p>
                      </div>
                  </div>
                   <div class="shou">
                      <img src="../assets/image/black-spare/tu-p2.png" alt="" />
                      <div class="small">
                        <p>散热背夹 </p>
                      </div>
                  </div>
                  <div class="shou">
                      <img src="../assets/image/black-spare/tu-p3.png" alt="" />
                      <div class="small">
                        <p>黑鲨磁吸充电线 </p>
                      </div>
                  </div>
                   <div class="shou">
                      <img src="../assets/image/black-spare/tu-p4.png" alt="" />
                      <div class="small">
                        <p>黑鲨手机3 </p>
                      </div>
                  </div>
                   <div class="shou">
                      <img src="../assets/image/black-spare/tu-p5.png" alt="" />
                      <div class="small">
                        <p>黑鲨手机3 </p>
                      </div>
                  </div>
                   <div class="shou">
                      <img src="../assets/image/black-spare/tu-p6.png" alt="" />
                      <div class="small">
                        <p>黑鲨手机3 </p>
                      </div>
                  </div>
                   <div class="shou">
                      <img src="../assets/image/black-spare/tu-p7.png" alt="" />
                      <div class="small">
                        <p>黑鲨手机3 </p>
                      </div>
                  </div>
             </div>
              <div class="phone">
                   <img src="../../src/assets/image/banner/banner-p7.jpg" alt="" />

              </div>
              

             

           
                
                
                




              



      



             

            </div>
          </div>
        </div>
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
import axios from "axios";
export default {
  data() {
    return {
      leftList: [],
      rightList: [],
    };
  },
  created() {
    var that = this;

    axios
      .get("http://localhost:5500/src/list/type-01/rightList.json")
      .then(function (response) {
        that.rightList = response.data.tabslabel;
        console.log(response.data.tabslabel);
        console.log("rightList是" + that.rightList);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5500/src/list/type-01/leftList.json")
      .then(function (response) {
        that.leftList = response.data.tabslabel;
        console.log("leftList是" + that.leftList);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
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

    // 左边列表点击
    leftbtn(index) {
      console.log(index);
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

/* 中间显示区域 */
.middle-top {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
}

.listleft {
  background-color: thistle;
  width: 25%;
}

.listright {
  background-color: yellowgreen;
  width: 75%;
  overflow: auto;
}

.left {
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: hidden;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: scroll;
}
.rigth-name {
  width: 100%;
  height: 7%;
  padding-top: 10px;
}
.rigth-name span {
  color: #3c3c3c;
}

.right-show {
  background-color: thistle;
  height: 300px;
  width: 100%;
}
.one img {
  width: 100%;
  margin-top: 5%;
}
.zi p {
  width: 160px;
  height: 20px;
  font-size: 16px;
  color: black;
  margin:10px 12px auto auto;
  margin-top:15px ;

}
.munber {
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.munber img {
  width: 50px;
  height: 50px;
}
.shou {
  width: 27%;
  height: 70px;
  margin-left: 6%;
}
.small {
  width: 100%;
  height: 13px;
  
}
.shou > .small {
  font-size: 7px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0.28rem;
}
.phone {
  width: 100%;
  height: 10%;

}
.phone img {
  width: 100%;
  height: 100%;
  margin-top: 15px;
}
.shouMix {
  width: 100%;
  height: 30%;
}
.shouMix img {
  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-left: 6%;
}
.shouMix > .small {
  font-size: 7px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0.28rem;
}
.parts{
  width: 100%;
  height: 60%;
   display: flex;
  flex-wrap: wrap;
   margin-top: 10px;
}

.parts img {
  width: 50px;
  height: 50px;
}
.Redmi{
   width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
   margin-top: 10px;
}

.Redmi img {
  width: 50px;
  height: 50px;
}
.RedmiX{
   width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
   margin-top: 10px;

}
.RedmiX img {
  width: 50px;
  height: 50px;
}

</style>