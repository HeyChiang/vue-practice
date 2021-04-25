<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div style="background: red">
      <p>葫芦娃，葫芦娃</p>
      <p>一根藤上七朵花</p>
      <p>小小树藤是我家啦啦啦啦</p>
      <p>叮当当咚咚当当 浇不大</p>
      <p>叮当当咚咚当当 是我家</p>
      <p v-for="i of 10" :key="i">{{i}}啦啦啦啦</p>
      <p>...</p>
    </div>
    
    <button @click="print">Print local range</button>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    print () {
      // Pass the element id here
      this.$htmlToPaper('app');
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
</style>
