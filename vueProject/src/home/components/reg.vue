<template>
  <div class="container">
      <div class="top-bar"><img src="../../assets/top-bar.jpg"></div>
      <div class="reg-container">
          <div>
              <span>用户名</span>
              <input type="text" name="login_name" v-model="login_name">
          </div>
          <div><span>真实姓名</span><input type="text" name="login_name" v-model="login_name"></div>
          <div><span>密码</span><input type="password" name="password" v-model="password"></div>
          <div>
              <span>性别</span>
              <div class="sex">
                  <input name="sex" type="radio" checked="checked" value='0'/><p>男</p>
                  <input name="sex" type="radio" value='1'/><p>女</p>
              </div>
          </div>
          
          
          
          <button @click="reg" class="btn">注册</button>
      </div>
      <div> <button class="btn-login" @click="login">已有账号？去登录</button></div> 
  </div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'HelloWorld',
    data() {
        return {
            login_name: '',
            password: '',
        };
    },
    created() {
    },
    methods: {
        reg() {
            console.log('发送注册请求');
            const This = this;
            console.log('000000',This.login_name, This.password);
            Vue.axios.get(`/reg?login_name=${This.login_name}`, {
                login_name: This.login_name,
                password: This.password,
            }).then((resp) => {
                console.log('请求成功', resp.data);
                if (resp.data.status_code === 0) {
                    alert(`注册成功, ${resp.data.data.login_name}`);
                    This.$router.push({
                        path: '/login'
                    });
                }
            }).catch((e) => {
                console.log('请求失败', e);
            });
        },
        login() {
            this.$router.push({
                path: '/login'
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container {
      height: 100%;
      .top-bar {
          width: 100%;
          img {
              width: 100%;
              height: 200px;
          }
      }
      .reg-container {
          margin-top: 30px;
          width: 100%;
          text-align: center;
          div {
              margin-left: 50%;
              transform: translateX(-50%);
              height: 34px;
              margin-bottom: 15px;
              position: relative;
              text-align: left;
              width: 350px;
              padding: 0;
              span {
                  margin-left: 0;
                  display: inline-block;
                  width: 100px;
                  height: 100%;
                  line-height: 34px;
                  text-align: justify;
                  margin-right: 10px;
                  -webkit-text-align-last:justify;
                  -moz-text-align-last:justify;
                  &::after {
                      display: inline-block;
                      width: 100%;
                      content: '';
                      height: 0;
                  }
              }
              input {
                  display: inline-block;
                  height: 30px;
                  width: 200px;
                  line-height: 30px;
                  position: absolute;
                  top: 0;
              }

          }
          .sex {
              position: absolute;
              right: 0;
              width: 200px;
              display: inline-block;
              text-align: right;
              overflow: hidden;
              p {
                  display: inline-block;
                  height: 30px;
                  line-height: 30px;
                  position: relative;
                  top: -7px;
                  margin-right: 15px;
              }
              input {
                  position: static;
                  width: 30px;
              }
          }
      }
      .btn {
          height: 40px;
          width: 80px;
          border-radius: 20px;
          background:linear-gradient(left, orange , red);
          font-size: 18px;
          color: white;
      }
      .btn-login {
        margin-top: 50px;
          width: 160px;
          height: 30px;
          border-radius: 15px;
          background:linear-gradient(left, orange , red);
          font-size: 16px;
          color: white;
      }

      
  }
</style>
