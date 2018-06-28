<template>
<div id="timeline" class="content">
  <div class="timeline-block">
    <div class="timeline-circle"></div>
    <div class="timeline-content">
      <h2>{{info.name}}</h2>
      <p>{{info.section}}</p>
      <div v-show="show" class="timeline-content-text">
        <p>{{info.section1}}</p>
        <p class="timeline-content-author">{{info.author}}</p>
      </div>
      <button @click="show = !show">阅读全文</button>
      <span class="date">{{info.time}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    info: Object 
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
#timeline{
  position: relative;
  padding: 2em 0;
}
#timeline::before{
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: rgba(215, 228, 237, 0.705);
}
.content{
  width: 70%;
  margin: 0 auto;
}
.timeline-block:first-child{
  margin-top: 0;
}
.timeline-block{
  position: relative;
  margin: 2em 0;
}
.timeline-circle{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  background: rgb(228, 160, 160);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(206, 54, 54, 0.2);
}
.timeline-content{
  position: relative;
  margin-left: 60px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.25em;
  padding: 1em;
  box-shadow: 0 3px 0 rgb(215, 228, 237);
}
.timeline-content p{
  margin-top: 1em;
}
.timeline-content::before{
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid rgba(255, 255, 255, 0.753);
}
.timeline-content::after{
  content: '';
  display: table;
  clear: both;
}
button{
  border: 0;
  cursor: pointer;
  outline: none;
  float: right;
  padding: .8em 1em;
  background: rgb(178, 184, 189);
  color: rgb(255, 255, 255);
  border-radius: 0.25em;
  position: relative;
}
button:hover{
  background: rgb(137, 137, 138);
}
button:active{
  top: 1px;
  left: 1px;
}
.date{
  float: left;
  padding: 1em 0;
  opacity: .8;
}
.timeline-content-text{
  margin-top: 1em;
  margin-left: 2em;
  color: rgba(0, 0, 0, 0.5);
}
.timeline-content-author{
  text-align: right;
  margin-right: 2em;
  margin-bottom: 1em;
}
</style>
