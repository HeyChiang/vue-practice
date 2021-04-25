<template>
  <div id="app">
    <!-- 使用vue-print-nb打印 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  
    <button @click="windowPrint"> 打印 </button>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import printJS from 'print-js'

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods:{
    windowPrint(){
      // printJS({printable:'app',documentTitle:'标题', type:'html',style:'#app {font-family: Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;margin-top: 60px;}'})
      printJS({printable:'app',documentTitle:'标题', type:'html',targetStyles:'*'})
      
    }
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
/* 
加入样式可以去页眉也页脚
@media screen {
  div.divFooter {
    display: none;
  }
}
@media print {
  div.divFooter {
    position: fixed;
    bottom: 0;
  }
} */
</style>
