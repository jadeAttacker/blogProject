<template>
  <div class="hello">
      <h1>我的博客</h1>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'HelloWorld',
    data () {
        return {
            login_name: '',
            password: '',
        }
    },
    created() {
      
    },
    methods: {
        reg() {
            console.log('发送注册请求');
            const This = this;
            console.log('000000',This.login_name, This.password);
            Vue.axios.get(`/reg?login_name=${This.login_name}`, {
                login_name : This.login_name,
                password: This.password,
            }).then((resp) => {
              console.log('请求成功', resp.data);
              if (resp.data.status_code === 0) {
                  alert(`注册成功, ${resp.data.data.login_name}`);
                  This.$router.push({
                    path: '/login'
                  })
              }
            }).catch((e) => {
                  console.log('请求失败', e)
            });
        },
        login() {
              this.$router.push({
                path: '/login'
              })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
