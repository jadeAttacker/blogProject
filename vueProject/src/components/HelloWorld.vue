<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{href}}</h2>
    <p @click="goReg" class="btn">去注册</p>
   </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to the blog! register first, please',
            href: '1111'
        }
    },
    mounted() {
        this.href =  window.location.href;
    },
    methods: {
        goReg: function() {
            this.$router.push({
              path: '/reg'
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  cursor: pointer;
}
</style>
