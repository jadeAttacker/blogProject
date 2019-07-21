<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>2019.5.18</h2>
    <h2 @click="change">{{name}}</h2>
    <h2 v-show="show">显示</h2>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '来自about============第一天的页面！！！',
      name: 'chenxiaoning',
      show: true,
    }
  },
  created() {
      Vue.axios.get("https://blog.csdn.net/MyWoodStream/article/details/82585401").then((response) => {
        console.log('==========', response.data)
      });
  },
  methods: {
    change() {
      this.name = 'dww';
      this.show = !this.show;
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
