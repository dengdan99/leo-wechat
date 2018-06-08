<template>
  <div class="top-layout">
    <mt-header fixed title="登录"></mt-header>
    <div class="wrap">
      <router-view class="router-view"></router-view>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="wechat" @click.native="tabItemClick('wechat')">
        <!-- <img slot="icon" src="../assets/logo.png"> -->
        <span>微信</span>
      </mt-tab-item>
      <mt-tab-item id="contacts" @click.native="tabItemClick('contacts')">
        <!-- <img slot="icon" src="../assets/logo.png"> -->
        <span>通讯录</span>
      </mt-tab-item>
      <mt-tab-item id="discovery" @click.native="tabItemClick('discovery')">
        <!-- <img slot="icon" src="../assets/logo.png"> -->
        <span>发现</span>
      </mt-tab-item>
      <mt-tab-item id="my" @click.native="tabItemClick('my')">
        <!-- <img slot="icon" src="../assets/logo.png"> -->
        <span>我</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
  
</template>

<script>
import { Header, Tabbar, TabItem } from 'mint-ui'

export default {
  name: 'ChatList',
  components: {
    [Header.name]: Header,
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem
  },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    tabItemClick (type) {
      console.log(type)
      if (type === 'wechat') return this.$router.push('/chat-list')
      if (type === 'contacts') return this.$router.push('/contacts')
    }
  }
}
</script>

<style lang="less" scoped>
.top-layout{
  padding: 40px 0;
  height: 100%;
  .wrap{
    height: 100%;
    overflow: auto;
  }
}
</style>
