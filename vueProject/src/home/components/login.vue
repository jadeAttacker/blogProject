<template>
  <div class="hello">
      <h1>欢迎回来！</h1>
      <label>用户名：<input type="text" name="login_name" v-model="login_name"></label><br>
      <label>密码：<input type="password" name="password" v-model="password"></label><br>
      <button class="btn" @click="myBlog">登录</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        login_name: '',
        password: '',
    }
  },

  methods: {
        myBlog: function() {
            this.$router.push({
              path: '/content'
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  color: aquamarine;
}
</style>
