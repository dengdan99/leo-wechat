<template>
  <div>
    <mt-cell
        is-link
        to="/contact-add"
        title="新的朋友"
        value="添加好友">
      </mt-cell>

    <div class="user-list">
      <mt-cell-swipe
        v-for="(user, index) in contacts"
        :key="index"
        :title="user.nickname"
        is-link
        :to = "'/chat/' + user.nickname"
        :right="[
          {
            content: '删除',
            style: { background: 'red', color: '#fff' },
            handler: () => deleteContact(user, index)
          }
        ]"></mt-cell-swipe>
    </div>
  </div>
</template>

<script>
import { Cell, CellSwipe } from 'mint-ui'

export default {
  name: 'Contact',
  components: {
    [CellSwipe.name]: CellSwipe,
    [Cell.name]: Cell
  },
  data () {
    return {
      searching: false,
      searchResult: [],
      contacts: []
    }
  },
  computed: {
    user () {
      return window.JSON.parse(window.localStorage.getItem('user'))
    },
  },
  watch: {
  },
  mounted () {
    this.fetchContacts()
  },
  sockets: {
    receiveContact (data) {
      if (data.code === 0) {
        this.contacts = data.data
      }
    },
    receiveServiceError (data) {
      this.$toast(data.msg)
    }
  },
  methods: {
    fetchContacts () {
      this.$socket.emit('getContacts', {nickname: this.user.nickname})
    },
    deleteContact (user, index) {
      this.$socket.emit('removeFriend', {nickname: this.user.nickname, to_nickname: user.nickname})
      this.$toast('删除好友成功')
      this.contacts.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.user-list{
  padding-top: 15px;
}
</style>
