<template>
  <div v-show="content.length" class="page">
    <div class="page-main">
      <Content v-for="item in filtercontent" :info="item" :key="item.id"></Content>
    </div>
    <div class="page-side">
      <Head></Head>
      <Clock></Clock>
      <Aboutme></Aboutme>
      <Contact></Contact>
    </div>
    <div class="page-not-found" v-show="!filtercontent.length">没有相关数据</div>
  </div>
</template>

<script>
import Content from '../components/content.vue';
import Head from '../components/head.vue';
import Clock from '../components/clock.vue';
import Contact from '../components/contact.vue';
import Aboutme from '../components/aboutme.vue';
export default {
  components: {Content, Head, Clock, Contact, Aboutme},
  computed: {
    content () {
      return this.$store.state.boke;
    },
    filtercontent () {
      let content = [...this.content];
      content = content.sort((a, b) => b.id - a.id);
      return content;
    }
  },
  mounted () {
    this.$store.dispatch('getBoke');
  }
}
</script>

<style scoped>
.page-main{
  width: 60%;
  float: left;
}
.page-side{
  width: 40%;
  float: right;
}
</style>
