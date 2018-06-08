<template>
  <div class="page-chat-list">
    <mt-cell class="cell" title="张三" is-link>
      <span class="last-msg">你好啊</span>
    </mt-cell>
  </div>
</template>

<script>
import { Cell } from 'mint-ui'

export default {
  name: 'ChatList',
  components: {
    [Cell.name]: Cell
  },
  data () {
    return {
      selected: null
    }
  },
  mounted () {
  },
  props: {
    msg: String
  }
}
</script>

<style lang="less" scoped>
.page-chat-list{
  .cell{
  }
}
.last-msg{
  font-size: 12px;
}
</style>
