<template>
  <div class="search-box">
    <!-- 搜索页顶部 -->
    <div class="search-top">
      <div class="search-left" @click="back">
        <img src="../assets/home/左箭头.png" class="search-left-img" />
      </div>
      <div class="search-input-box">
        <input type="text " placeholder="搜索商品名称" class="search-input" />
      </div>
      <div class="search-right">
        <img src="../assets/home/搜索.png" class="search-right-img" />
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
 
<style scoped>
/* 顶部 */
.search-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 5px 5px;
  height: 50px;
}
.search-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-right: -5px;
}
.search-left-img {
  width: 25px;
}
.search-right-img {
  width: 30px;
}
.search-input {
  width: 100%;
  flex-grow: 1;
  padding: 5px 10px;
  margin: 0 10px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  outline: none;
}
</style>