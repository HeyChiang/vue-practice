import Vue from 'vue'
// import App from './AppToPaper.vue'
import App from './AppToPrintJS.vue'
// import App from './AppToNB.vue'


// 打赢的框架
import VueHtmlToPaper from 'vue-html-to-paper';
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}
Vue.use(VueHtmlToPaper, options);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
