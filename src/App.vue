<template>

  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
import {Group,Cell,XHeader,Loading} from 'vux'
export default {
  name: 'app',
  components: {
      Group,
      Cell,
      XHeader,
      Loading
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
