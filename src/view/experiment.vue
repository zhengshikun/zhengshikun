<template>
  <div v-show="experiment.length" class="experiment">
    <Experiments v-for="item in filterexperiment" :info="item" :key="item.id"></Experiments>
    <div class="experiment-not-found" v-show="!filterexperiment.length">没有相关数据</div>
  </div>
</template>

<script>
import Experiments from '../components/experiments.vue';
export default {
  components: {Experiments},
  computed: {
    experiment () {
      return this.$store.state.experiment;
    },
    filterexperiment () {
      let experiment = [...this.experiment];
      return experiment;
    }
  },
  mounted () {
    this.$store.dispatch('getExperiment');
  }
}
</script>

<style scoped>

</style>
