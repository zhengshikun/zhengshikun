<template>
    <div class="scroll" :class="{show:isActive}">
      <div id="toTop" @click="toTop(step)">&lt;</div>
    </div>
</template>

<script>
export default{
  props: {
    step: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toTop (i) {
      //  参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop -= i
      if (document.documentElement.scrollTop > 0) {
        var c = setTimeout(() => this.toTop(i), 16)
      } else {
        clearTimeout(c)
      }
    }

  },
  created () {
    var vm = this
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 60) {
        vm.isActive = true
      } else {
        vm.isActive = false
      }
    }
  }
}
</script>

<style scoped>
.scroll{
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: none;
}
.scroll>div{
  width: 45px;
  height: 45px;
  transform: rotate(90deg);
  line-height: 45px;
  text-align: center;
  font-size: 35px;
  font-family: "黑体";
  background-color: rgba(0,0,0,.2);
  color: #fff;
}
.scroll>div:hover{
  background-color: rgba(0,0,0,.5);
}
.show{
  display: block;
}
</style>
