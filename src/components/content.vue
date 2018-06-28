<template>
  <div class="content">
    <a :href="info.url"><img :src="info.image"></a>
    <h2>{{info.name}}</h2>
    <div class="content-message">
      <router-link to="/about">{{info.from}}</router-link> /
      <span>✭发表于 {{info.time}}</span> /
      <router-link to="/classify">ღ{{info.classification}}</router-link>
    </div>
    <p>{{info.section1}}</p>
    <p>{{info.section2}}</p>
    <p>{{info.section3}}</p>
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
  padding-bottom: 2em;
  border-bottom: 2px solid rgba(243, 0, 0, 0.5);
  background: rgba(255, 255, 255,0.5);
  overflow: hidden;
}
img{
  opacity: .7;
  width: 100%;
  height: 100%;
}
h2{
  margin-top: 2em;
}
.content-message,a{
  margin-top: 1em;
  font-size: .9em;
  color: rgba(0, 0, 0, 0.4);
}
p{
  margin: 2em 0;
  margin-left: 4em;
  text-align: left;
  color: rgba(0, 0, 0, 0.8)
}
 a:hover{
  color: rgba(255, 0, 0,.7);
}
.content:hover{
  background: rgba(255, 255, 255,.8);
}
</style>
