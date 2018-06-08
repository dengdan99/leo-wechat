<template>
  <router-view class="router-view"></router-view>
</template>

<script>

export default {
  name: 'app',
  computed: {
    user () {
      return window.JSON.parse(window.localStorage.getItem('user'))
    },
  },
  sockets:{
    connect: function() {
      console.log(this.$socket.id)
      if (this.user && this.user.nickname) {
        this.$socket.emit('updateSocketId', {nickname: this.user.nickname, socketId: this.$socket.id})
      }
    }
  }
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre, 
form,fieldset,input,textarea,p,blockquote,th,td { 
    padding: 0; 
    margin: 0; 
}
body, html{
    height: 100%;
}
*{
  box-sizing: border-box;
}
table { 
    border-collapse: collapse; 
    border-spacing: 0; 
}
fieldset,img { 
    border: 0; 
}
address,caption,cite,code,dfn,em,strong,th,var { 
    font-weight: normal; 
    font-style: normal; 
}
ol,ul { 
    list-style: none; 
}
caption,th { 
    text-align: left; 
}
h1,h2,h3,h4,h5,h6 { 
    font-weight: normal; 
    font-size: 100%; 
}
q:before,q:after { 
    content:”; 
}
abbr,acronym { 
    border: 0; 
}
</style>
