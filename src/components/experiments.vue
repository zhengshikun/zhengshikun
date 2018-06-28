<template>
  <div class="experiment">
    <h2>{{info.name}}</h2>
    <p>{{info.section}}</p>
    <a :href="info.url" target="_blank">{{info.data}}</a>
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
.experiment{
  width: 30%;
  margin-left: 10%;
  margin-right: 10%;
  display: inline-block;
  margin-top: 3em;
  text-align: center;
  border-bottom: 1px solid rgba(255, 0, 0,.7);
  border-radius: 5%;
  background: rgba(255, 255, 255,.5);
  overflow: hidden;
}
.experiment:hover{
  background: rgba(255, 255, 255,.8);
}
h2{
  margin-top: 1em;
}
p{
  margin: 1em 0;
}
a{
  color: rgba(0, 68, 255, 0.5);
}
a:hover{
  color: rgba(255, 0, 0, 0.7);
}
</style>
