<template>
  <div>
    <mt-header title="注册">
      <mt-button slot="right" @click="$router.push('/login')">登录</mt-button>
    </mt-header>
    <div class="form">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="form.nickname"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
      <mt-button type="primary" size="large" @click="clickHandler">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { register } from 'api'
import { Header, Field, Button } from 'mint-ui'

export default {
  name: 'Register',
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
  methods: {
    clickHandler () {
      register(this.form).then(res => {
        if (res.data.code !== 0) {
          this.$toast(res.data.msg)
          return
        }
        window.localStorage.setItem('user', JSON.stringify(res.data.data))
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.form{
  padding: 10px;
}
</style>
