<template>
  <div class="layout">
    <mt-header fixed :title="toNickname"></mt-header>
    <div class="wrap">
      <div class="msg-box">
        <div class="msg-line" v-for="(msg,index) in messageList" :key="index">
          <div class="rec-msg" v-if="msg.form === toNickname">
            <div class="name"><span>{{msg.form}}:</span></div>
            <div class="msg-cont">
              <p>{{msg.text}}</p>
            </div>
          </div>
          <div class="send-msg" v-else>
            <div class="name"><span>{{msg.form}}:</span></div>
            <div class="msg-cont">
              <p>{{msg.text}}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="chat-bottom">
      <div class="inp-area">
        <input v-model="msgText" class="inp" />
      </div>
      <div class="btn-area">
        <mt-button size="small" @click="clickSendMsg">发送</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui'

export default {
  name: 'Chat',
  components: {
    [Button.name]: Button,
    [Header.name]: Header
  },
  data () {
    return {
      msgText: null,
      toNickname: null,
      messageList: []
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
    receiveMessage (msg) {
      this.messageList.push(msg)
    }
  },
  methods: {
    clickSendMsg () {
      if (!this.msgText) return
      const msg = {
        form: this.user.nickname,
        to: this.toNickname,
        text: this.msgText,
        created: Date.now()
      }
      this.$socket.emit('sendMessage', msg)
      this.messageList.push(msg)
      this.msgText = null
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
  padding: 40px 0;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
}
.chat-bottom{
  background-color: #e4e4e4;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  min-height: 40px;
  display: flex;
  .inp-area{
    flex: 1;
    padding: 4px;
    .inp{
      background-color: #f6f8fa;
      height: 33px;
      border: none;
      line-height: 33px;
      width: 100%;
      padding: 0 5px;
    }
  }
  .btn-area{
    padding-top: 4px;
    width: 60px;
    text-align: center;
  }
}
.wrap {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.msg-box{
  padding: 15px;
}
.msg-line{
  margin-bottom: 20px;
  &::after{
    content:" "; 
    display:block; 
    height:0; 
    visibility:hidden; 
    clear:both;
  }
  .rec-msg{
    float: left;
  }
  .name{
    color: #ccc;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .msg-cont{
    background-color: #ffffff;
    border: #e4e4e4 solid 1px;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 16px;
    line-height: 20px;
  }
  .send-msg{
    float: right;
    .name{
      text-align: right;
    }
    .msg-cont{
      background-color: #78f393;
      border-color: #48d354;
      text-align: right;
    }
  }
}
</style>
