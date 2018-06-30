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
  margin: 0 auto;
  text-align: center;
  padding: 3em 0;
  margin:3em auto;
  font-family: 'calliehand';
  background: rgba(255, 255, 255,.5);
}
.head-img{
  width: 45%;
  height: 45%;
  margin: 2em auto;
}
h4{
  font-size: 2em;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
p{
  font-size: 1.5em;
}
.head:hover{
  background: rgba(255, 255, 255,.8);
}
</style>
