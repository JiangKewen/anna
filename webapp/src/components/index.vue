<template>
  <div class="searchMain">
    <span>可以开始搜索了</span>
    <input type="text" class="jk_input searchs" placeholder="请输入要搜索的姓名" v-model="searchword" @keyup.enter="searchs">
    <div class="showNames">
      <div class="nameItem" v-for="(name, key) in names" :key="key">{{name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchword: '',
      names: ['Saber', '小李老师', '大圣'] // 搜索到的name展示
    }
  },
  methods: {
    searchs () {
      alert('进行搜索')
    }
  }
}
</script>
<style>
.searchMain {
  width: 1024px;
  height: 568px;
  margin: 10vh auto;
  background: url("../../static/wallhaven.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.searchs {
  position: absolute;
  width: 180px;
  top: 216px;
  left: 222px;
}
.showNames {
  position: absolute;
  top: 214px;
  left: 570px;
}
.nameItem {
  margin-bottom: 12px;
}
</style>
