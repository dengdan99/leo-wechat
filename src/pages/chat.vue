<template>
  <div class="layout">
    <mt-header fixed :title="toNickname"></mt-header>
    <div class="wrap">
    </div>
    <div class="chat-bottom">
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui'

export default {
  name: 'Chat',
  components: {
    [Header.name]: Header
  },
  data () {
    return {
      toNickname: null
    }
  },
  computed: {
    title () {
      return this.toNickname || '加载中...'
    },
    user () {
      return window.JSON.parse(window.localStorage.getItem('user'))
    },
  },
  watch: {
  },
  mounted () {
    this.toNickname = this.$route.params.nickname
  },
  sockets: {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.layout{
  padding: 40px 0;
  height: 100%;
  position: relative;
}
.chat-bottom{
  background-color: #d9d9d9;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  min-height: 40px;
}
</style>
