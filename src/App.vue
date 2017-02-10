<template>
  <div id="app">
    <router-view></router-view>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from './components/Footer'
export default {
  name: 'app',
  components:{
    Bottom
  }
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background: #f1f2f3;
  /*margin-top: 60px;*/
}
</style>
