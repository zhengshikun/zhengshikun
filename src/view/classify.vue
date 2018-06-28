<template>
  <div v-show="content.length">
    <div class="classify">
      <div class="classify-list">
        <button @click="show = !show"><img src="../assets/image/class.png"></button>
        <div v-show="show">
          <span
            class="classify-filter-item"
            :class="{on: item === filterClassify}"
            v-for="item in classifications"
            :key="item.id"
            @click="handleFilterClassifications(item)">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="classify-main">
      <Content v-for="item in filtercontent" :info="item" :key="item.id"></Content>
    </div>
    <div class="classify-side">
      <Head></Head>
      <Clock></Clock>
      <Aboutme></Aboutme>
      <Contact></Contact>
    </div>
    <div class="product-not-found" v-show="!filtercontent.length">暂无数据</div>
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
    classifications () {
      return this.$store.getters.classifications;
    },
    filtercontent () {
      let content = [...this.content];
      if (this.filterClassify !== '') {
        content = content.filter(item => item.classification === this.filterClassify)
      }
      return content;
    }
  },
  data () {
    return {
      filterClassify: '',
      show: false
    }
  },
  methods: {
    handleFilterClassifications (item) {
      if (this.filterClassify === item) {
        this.filterClassify = '';
      }else {
        this.filterClassify = item;
      }
    }
  },
  mounted () {
    this.$store.dispatch('getBoke');
  }
}
</script>

<style scoped>
.classify-main{
  width: 60%;
  float: left;
}
.classify-side{
  width: 40%;
  float: right;
}
.classify-list{
  width: 50%;
  text-align: center;
  margin: 0 auto;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background: rgba(255, 255, 255,.5);
}
.classify-list img{
  width: 2em;
  height: 1em;
}
.classify-list:hover{
  background: rgba(255, 255, 255,.7);
}
.classify-filter-item{
  display: inline-block;
  margin-top: 1em;
  margin: 0 1em;
  cursor: pointer;
  position: relative;
}
.classify-filter-item:hover{
  color: rgba(255, 0, 0,.4);
}
.classify-filter-item.on{
  color: rgba(255, 0, 0,.7);
}
.classify-filter-item:active{
  top: 1px;
  left: 1px;
}
button{
  display: block;
  border: 0;
  width: 100%;
  font-family: 'zhongqichen';
  background: rgba(255, 255, 255,.0);
  text-align: center;
  font-size: 2em;
  cursor: pointer;
  outline: none;
  position: relative;
}
button:active{
  top: 1px;
  left: 1px;
}
</style>
