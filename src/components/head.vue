<template>
  <div class="head">
    <h4>Travel as you wish!</h4>
    <div class="head-img">
      <img src="../assets/image/head.jpg">
    </div>
    <p>what about you？</p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.head{
  width: 60%;
  margin: 3em auto;
  text-align: center;
  font-family: 'calliehand';
  background: rgba(255, 255, 255,.5);
}
.head-img{
  width: 45%;
  height: 45%;
  margin: 0 auto;
}
h4{
  height: 3em;
  line-height: 3em;
  font-size: 2em;
  overflow: hidden;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
p{
  height: 3em;
  line-height: 3em;
  font-size: 1.5em;
  overflow: hidden;
}
.head:hover{
  background: rgba(255, 255, 255,.8);
}
</style>
