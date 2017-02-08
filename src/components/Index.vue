<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="http://qiyan93.com" target="_blank">砀山站</a></li>
      <li><a href="https://weidian.com/?userid=1160158592&wfr=wx_profile" target="_blank">建水站</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">自由站</a></li>
      <li><a href="https://weidian.com/?userid=1160158592&wfr=wx_profile" target="_blank">植物图鉴</a></li>
      <br />
      <br />
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">博客分站</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '您好，欢迎来到可贴杂货铺'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
