<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    
    <button v-print="printObj">Print local range</button>
    <button @click="windowPrint">打印页面</button>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import print from 'vue-print-nb'

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods:{
    windowPrint(){
      window.print()
    }
  },
  directives: {
    print   
  },
  data() {
      return {
          printObj: {
            id: "app",
            popTitle: 'This is my print title',
            extraCss: 'https://www.google.com,https://www.google.com',
            extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
          }
      };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
