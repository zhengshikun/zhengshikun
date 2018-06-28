<template>
  <div class="contact">
    <div class="contact-img"><a href="https://github.com/zhengshikun" target="_blank"><img src="../assets/image/github.png"></a></div>
    <div class="contact-img"><a href="https://weibo.com/u/3922341463?topnav=1&wvr=6&topsug=1&is_all=1" target="_blank"><img src="../assets/image/weibo.png"></a></div>
    <div class="contact-img"><a href="https://github.com/zhengshikun/notes/blob/master/images/wx.jpg?raw=true" target="_blank"><img src="../assets/image/wx.png"></a></div>
    <div class="contact-img"><a href="https://github.com/zhengshikun/notes/blob/master/images/qq.jpg?raw=true"><img src="../assets/image/qq.png"></a></div>
    <div class="contact-img"><a href="https://www.zhihu.com/people/zheng-shi-kun-7/activities" target="_blank"><img src="../assets/image/zhihu.png"></a></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.contact{
  width: 60%;
  text-align: center;
  margin: 0 auto;
  margin-top: 3em;
  background: rgba(255, 255, 255,.1);
}
.contact:hover{
  background: rgba(255, 255, 255,.3);
}
img{
  width: 100%;
  height: 100%;
}
.contact-img{
  display: inline-block;
  opacity: .5;
  width: 3em;
  height: 3em;
}
.contact-img:hover{
  opacity: .8;
}
</style>
