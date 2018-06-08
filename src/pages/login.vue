<template>
  <div>
    <mt-header title="登录">
      <mt-button slot="right" @click="$router.push('/register')">注册</mt-button>
    </mt-header>
    <div class="form">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="form.nickname"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
      <mt-button type="primary" size="large" @click="loginHandler">登录</mt-button>
    </div>
  </div>
</template>

<script>
import { Header, Field, Button } from 'mint-ui'

export default {
  name: 'Login',
  components: {
    [Header.name]: Header,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      form: {
        nickname: null,
        password: null
      }
    }
  },
  props: {
    msg: String
  },
  sockets: {
    receiveLogin (data) {
      if (data.code !== 0) {
        this.$toast(data.msg)
        return
      }
      this.$socket.emit('updateSocketId', {nickname: data.data.nickname, socketId: this.$socket.id})
      window.localStorage.setItem('user', JSON.stringify(data.data))
      this.$router.push('/')
    },
  },
  methods: {
    loginHandler () {
      this.$socket.emit('sendLogin', this.form)
    }
  }
}
</script>

<style lang="less" scoped>
.form{
  padding: 10px;
}
</style>
