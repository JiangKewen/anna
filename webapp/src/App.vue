<template>
  <div id="app">
    <router-view/>
    <span class="tips" title="沈博：友情提示！">请配合使用谷歌浏览器，体验更佳哟</span>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, div, span, h1 {
  margin: 0;
  padding: 0;
  color: #FFF;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  background: #07073d;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.tips {
  position: fixed;
  right: 10px;
  bottom: 10px;
  color: #5f5858;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
}
/* input样式 */
.jk_input {
  display: block;
  width: 300px;
  height: 36px;
  padding: 8px 10px;
  box-sizing: border-box;
  background: rgb(80, 130, 172);
  color: rgb(213, 216, 165);
  margin: 0 auto;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
}
</style>
