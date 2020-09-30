<template>
 <div class="one-title">
     <div class="mark">
         <img src="../../src/assets/image/min-title/6.png">
     </div>
     <div class="title">
        <img src="../../src/assets/image/min-title/5.png">
      </div>
      <span class="p">小米账号登录</span>
      <div class="log">
       
        <input type="number" name="acout" class="call" placeholder="+86 > 手机号码"  v-model.trim="acout">
        <input type="number" name="pasd" class="call" placeholder="短信验证码  " v-model.trim="pasd" >
       
        
    </div>
    <div class="ruan">
        <div class="lij" @click="dengr" >
            <span>立即登入/注册</span>
        </div>
         
    </div>
    <div class="yanz">
        <p>收不到验证码？</p>
    </div>
    <div class="button">
        <div class="xian">
             <p>其他方式登入</p>
        </div>
        <div class="pain">
          <div class="tu">
             <img src="../../src/assets/image/min-title/7.png" alt="">
            </div>
            <div class="tu">
               <img src="../../src/assets/image/min-title/8.png" alt="">
            </div>
             <div class="tu">
               <img src="../../src/assets/image/min-title/9.png" alt="">
            </div>

         </div> 
    </div>
    <div class="di">
        <p>
            中文(简体) English | 常见问题 |隐私政策
        </p>
    </div>

        


 
 </div>
</template>
 
<script scoped>
export default {
   data(){
       return{
           acout:"18779359726",
           pasd:"12345"
       }
   },
    methods:{
         dengr() {
      this.$router.push({
         path:"/user",
      });
      },
    }
   
 
}
</script>
 
<style>
  
    
     .one-title{
         width: 100%;
         height: 100%;
     }
      .mark img{
         width:24px ;
         height: 24px;
         margin-left: 90%;
         margin-top: 10px;
     }
     .title{
         height: 100px;
         width: 100px;
         margin: 0 auto;
     }
     .title img{
         width: 100%;
         height: 100%;
     }
     .p{
         display: block;
         font-size: 25px;
         width:150px ;
         height: 40px;
         margin-left: 100px;
     }

     .log{
         width: 100%;
         display: flex;
         flex-wrap: wrap;
     }
     .call{
         width: 100%;
         height: 50px;

     }
     input{
         border-top: white;
         border-left: white;
         border-right: white;
         border-bottom: 1px solid;
         border-color: #d3d3d3;
         size: 99px;

     }
     input::-webkit-input-placeholder{
            font-size: 20px;
            color: #DCDCDC;	
      }
      .ruan{
          width: 300px;
          height:40px;
          background-color: #ff6700;
          margin-left: 38px;
          border-radius:30px ;
          margin-top: 30px;
      }
      .ruan>.lij{
          font-size: 20px;
          color: white;
          width: 140px;
       
          height: 20px;
          margin: 0 auto;
          margin-bottom: 10px;
      }
      .yanz{
          width: 130px;
          height: 30px;
          margin: 0 auto;
      }
      .yanz>p{
          font-size: 16px;
          color: #C0C0C0;
               
      }
      .button{
          width: 100%;
          height: 30%;
      }
      .xian{
          width: 100px;
          height: 30px;
          margin: 0 auto;
          margin-top: 30px;
      }
     .button .xiao>p{
          font-size: 10px;
          color: #C0C0C0;
      }
      .pain{
          width: 100%;
          height: 40px;
           display: flex;
          flex-wrap: nowrap;
          justify-content: space-evenly;
      }
      

      .pain>.tu>img{
          width: 35px;
          height: 35px;
      }
      .di{
          width: 100%;
          height: 20px;
          margin-left: 45px;
          margin-bottom:30px;

          
      }
      
   
     

    
     
    
 
</style>