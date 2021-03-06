// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AMap from 'vue-amap';
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

Vue.use(AMap);

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
AMap.initAMapApiLoader({
    // 申请的高德key
    key: '6fdd794ebe018a1a3a6f746b99c969b4',
    // 插件集合
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
});
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
