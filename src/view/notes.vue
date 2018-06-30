<template>
    <div class="notes">
      <Timeline v-for="item in filtercontent" :info="item" :key="item.id"></Timeline>
    </div>
</template>
<script>
import Timeline from '../components/timeline.vue'
export default {
  components: {Timeline},
  computed: {
    content () {
      return this.$store.state.notes
    },
    filtercontent () {
      let content = [...this.content]
      content = content.sort((a, b) => b.id - a.id)
      return content
    }
  },
  mounted () {
    this.$store.dispatch('getNotes')
  }
}
</script>

<style scoped>
.notes{
  margin-top: 3em;
}
</style>
