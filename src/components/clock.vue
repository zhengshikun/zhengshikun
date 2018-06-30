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
  margin-top: 3em;
  margin: 0 auto;
  padding: 3em 0;
  overflow: hidden;
}
.time{
  letter-spacing: 0.2em;
  font-size: 2em;
  padding: 5px 0;
}
.date{
  letter-spacing: 1em;
  font-size: 1em;
}
.text{
  font-family: 'calliehand';
  font-weight: bold;
  letter-spacing: .5em;
  font-size: 1em;
  padding-top: 20px;
}
.clock:hover{
  background: rgba(255, 255, 255,.8);
}
</style>
