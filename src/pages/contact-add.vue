<template>
  <div>
    <mt-search
      v-model="searchValue"
      cancel-text="取消"
      placeholder="搜索">
      <div style="padding-top: 44px;">
        <mt-cell
          v-for="(item, index) in searchResult"
          :key="index"
          :title="item.nickname">
          <mt-button size="small" @click="addContact(item)">+ 加好友</mt-button>
        </mt-cell>
      </div>
    </mt-search>
  </div>
</template>

<script>
import { Cell, Search, Button } from 'mint-ui'

export default {
  name: 'Contact',
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [Search.name]: Search
  },
  data () {
    return {
      searching: false,
      searchResult: [],
      searchValue: null
    }
  },
  computed: {
    user () {
      return window.JSON.parse(window.localStorage.getItem('user'))
    },
  },
  watch: {
    searchValue (val) {
      this.$socket.emit('searchUsers', {nickname: val})
    }
  },
  mounted () {
  },
  sockets: {
    receiveSearchUsers (data) {
      if (data.code === 0) {
        this.searchResult = data.data
      }
    },
    receiveServiceError (data) {
      this.$toast(data.msg)
    }
  },
  methods: {
    addContact (user) {
      this.$socket.emit('addFriend', {nickname: this.user.nickname, to_nickname: user.nickname})
      this.$toast('好友添加成功')
      return
    }
  }
}
</script>

<style lang="less" scoped>
.form{
  padding: 10px;
}
</style>
