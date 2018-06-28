import Vue from 'vue'
import Vuex from 'vuex'

import boke_data from '../assets/boke.js'
import experiment_data from '../assets/experiment.js'
import notes_data from '../assets/notes.js'

Vue.use(Vuex)

//数组对象去重
function getFilterArray(array) {
  const res = [];
  const json = {};
  for (let i = 0; i < array.length; i++) {
    const _self = array[i];
    if (!json[_self]) {
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
};
//字符串时钟
function zeroPadding(num, digit) {
  let zero = '';
  for (var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

export default new Vuex.Store({
  state: {
    boke:[],
    experiment:[],
    notes:[],
    time:'',
    date:'',
  },
  getters: {
    classifications: state => {
      const classifications = state.boke.map(item => item.classification);
      return getFilterArray(classifications);
    },
  },
  mutations: {
    setBoke (state, data) {
      state.boke = data;
    },
    setExperiment (state, data) {
      state.experiment = data;
    },
    setNotes (state, data) {
      state.notes = data;
    },
    setTime (state) {
      let cd = new Date();
      state.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
      state.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2);
    },
  },
  actions: {
    getBoke (context) {
      setTimeout(() => {
        context.commit('setBoke', boke_data);
      }, 500);
    },
    getExperiment (context) {
      setTimeout(() => {
        context.commit('setExperiment', experiment_data)
      }, 500);
    },
    getNotes (notes) {
      setTimeout(() => {
        notes.commit('setNotes', notes_data)
      }, 500);
    },
    getTime (time) {
      setInterval(() => {
        time.commit('setTime')
      },1000);
    },
  }
})