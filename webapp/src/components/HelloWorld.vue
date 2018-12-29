<template>
  <div class="hello">
    <input class="jk_input" type="text" v-model="name" placeholder="请输入用户名">
    <input class="jk_input" type="password" v-model="password" placeholder="请输入登录密码">
    <div class="submits" @click="submit" v-html="guides"></div>
    <span class="smallTips" @click="guides='登录'">登录</span>
    <span class="smallTips" @click="guides='注册'">注册</span>
    <!-- <div v-for="(info,key) in users" :key="key">{{ info.name }}</div> -->
  </div>
</template>

<script>
import { getUsers } from '../api/user'
export default {
  name: 'HelloWorld',
  data () {
    return {
      guides: '登录',
      name: '',
      password: '',
      users: null
    }
  },
  methods: {
    initUsers () {
      getUsers().then(res => {
        this.users = res
        console.log(res, 'users')
      })
    },
    submit () {
      if (this.guides === '登录') {
        // 登录请求
        alert('欢迎登录')
        this.$router.replace('/index')
      } else {
        alert('欢迎注册')
        // 成功后发送登录请求
        this.$router.replace('/index')
      }
    }
  },
  mounted () {
    this.initUsers()
  }
}
</script>
<style scoped>
.hello {
  font-size: 16px;
  text-align: center;
  width: 500px;
  height: 400px;
  margin: 20vh auto;
  /* border: 1px solid tan; */
  color: #FFF;
  position: relative;
}
/* placeholder颜色 */
.hello input::-webkit-input-placeholder {
  color: rgb(155, 187, 207);
}
/* 提交按钮 */
.submits {
  background: rgb(159, 209, 243);
  color: #F19F9C;
  border-radius: 10px;
  padding: 6px 14px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  margin: 10px auto;
}
/* 右下角切换登录注册span样式 */
.smallTips {
  border: 1px solid rgb(58, 173, 226);
  border-radius: 4px;
  display: inline-block;
  height: 12px;
  line-height: 12px;
  text-align: center;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  position: absolute;
  bottom: 6px;
  right: 6px;
}
.smallTips:last-child {
  right: 60px;
}
</style>
