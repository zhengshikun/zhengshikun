<template>
  <div class="content">
    <div class="content-img">
      <a :href="info.url"><img :src="info.image"></a>
    </div>
    <h2>{{info.name}}</h2>
    <div class="content-message">
      <router-link to="/about">{{info.from}}</router-link> /
      <span>✭发表于 {{info.time}}</span> /
      <router-link to="/classify">ღ{{info.classification}}</router-link>
    </div>
    <div class="content-section">
      <p>{{info.section1}}</p>
      <p>{{info.section2}}</p>
      <p>{{info.section3}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style scoped>
.content{
  width: 80%;
  margin: 3em 0;
  float: right;
  text-align: center;
  border-bottom: 2px solid rgba(243, 0, 0, 0.5);
  background: rgba(255, 255, 255,0.5);
  padding-bottom: 2em;
  overflow: hidden;
}
.content-message{
  height: 20px;
  line-height: 20px;
  overflow: hidden;
}
.content-section{
  margin-top: 1em;
}
img{
  opacity: .7;
  width: 100%;
  height: 100%;
}
h2{
  height: 60px;
  line-height: 60px;
}
.content-message, a{
  font-size: .9em;
  color: rgba(0, 0, 0, 0.4);
}
p{
  height: 50px;
  line-height: 50px;
  margin-left: 4em;
  text-align: left;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.8)
}
 a:hover{
  color: rgba(255, 0, 0,.7);
}
.content:hover{
  background: rgba(255, 255, 255,.8);
}
</style>
