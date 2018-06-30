<template>
  <div>
    <div class="bg"></div>
    <div class="header">
      <div class="header-logo">
        <router-link to="/"><h1>Golden Pickup</h1></router-link>
        <p>什么才是对的，有谁承认，有谁允许，又有谁来背负？</p>
      </div>
      <div class="header-menu">
        <router-link to="/">首页 ✡</router-link>
        <router-link to="/experiment">实验 ☠</router-link>
        <router-link to="/noetes">笔记 ↝</router-link>
        <router-link to="/classify">分类 ღ</router-link>
        <router-link to="/about">关于 ♂</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view v-wechat-title='$route.meta.title'></router-view>
    </keep-alive>
    <div class="footer">
      <Footer></Footer>
    </div>
    <Gotop></Gotop>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Gotop from './components/gotop.vue'
export default {
  components: {Footer, Gotop},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
h1{
  color:rgb(255, 0, 0,.5);
  font-family: 'Mardian';
}
p{
  color: rgb(0, 0, 0,.6);
}
.bg{
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  background-size: 100% 100%;
  background-repeat:no-repeat;
  background-image: url('./assets/image/bg.png');
}
.header{
  width: 100%;
  height: 80px;
  text-align: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 2px solid rgba(153, 0, 0, 0.7);
  position: relative;
}
.header-logo{
  display: inline-block;
  margin-top: 10px;
}
.header-menu{
  float: right;
  line-height: 80px;
  margin: 0 150px;
  font-family: 'HeLong';
}
.header-menu a{
  padding: 0 30px;
  color: #000000;
}
.header-menu a:hover{
  color: rgb(255, 0, 0,.5);
}
.footer{
  clear: both;
  width: 100%;
}

</style>
