import Vue from 'vue'
import Router from 'vue-router'

//一级目录
import Page from '../view/page.vue'
import Experiment from '../view/experiment.vue'
import Notes from '../view/notes.vue'
import Classify from '../view/classify.vue'
import About from '../view/about.vue'
//const Page = r => require.ensure([], () => r(require('../view/page.vue')), 'page')
//const Experiment = r => require.ensure([], () => r(require('../view/experiment.vue')), 'experiment')
//const Notes = r => require.ensure([], () => r(require('../view/notes.vue')), 'notes')
//const Classify = r => require.ensure([], () => r(require('../view/classify.vue')), 'classify')
//const About = r => require.ensure([], () => r(require('../view/about.vue')), 'about')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Page,
      meta: {
        title: '欢迎欢迎哦'
      }
    },
    {
      path: '/experiment',
      component: Experiment,
      meta: {
        title: '这里是小demo'
      }
    },
    {
      path: '/noetes',
      component: Notes,
      meta: {
        title: '随便写写啦'
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        title: '不同的分类不一样的你'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '想看看我吗'
      }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      return { x:0, y:0 }
    }
  },
})
