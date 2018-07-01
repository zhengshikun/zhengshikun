<template>
  <div class="clock">
    <p class="date">{{date}}</p>
    <p class="time">{{time}}</p>
    <p class="text">digital clock</p>
  </div>
</template>

<script>
export default {
  computed: {
    time () {
      return this.$store.state.time
    },
    date () {
      return this.$store.state.date
    }
  },
  mounted () {
    this.$store.dispatch('getTime')
  }
}
</script>

<style scoped>
.clock{
  width: 60%;
  font-family:'Times New Roman', Times, serif;
  color: rgba(255, 0, 0, 0.5);
  background: rgba(255, 255, 255,.5);
  text-align: center;
  margin: 0 auto;
  padding: 1em 0;
}
.date{
  height: 3em;
  line-height: 3em;
  letter-spacing: 1em;
  font-size: 1em;
}
.time{
  letter-spacing: 0.2em;
  font-size: 2em;
}
.text{
  height: 3em;
  line-height: 3em;
  font-family: 'calliehand';
  font-weight: bold;
  letter-spacing: .5em;
  font-size: 1em;
}
.clock:hover{
  background: rgba(255, 255, 255,.8);
}
p{
  overflow: hidden;
}
</style>
