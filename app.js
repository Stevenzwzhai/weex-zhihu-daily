// import foo from './src/foo.vue'
// foo.el = '#root'
// export default new Vue(foo);

import Vue from 'vue'
import App from './src/App.vue'
import 'mint-ui/lib/style.css'
import store from './src/vuex/store'

// import { sync } from 'vuex-router-sync'

// sync(store)

(() => {
  var deviceWidth = document.documentElement.clientWidth;

  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

  // 页面宽度发生变化时动态生成根字体尺寸
  window.onresize = function () {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 750) deviceWidth = 750; // Iphone6Plus的屏幕尺寸
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  }
})()

export default new Vue({
  el: '#root',
  store,
  render: h => h(App)
})
console.log(store);
// new Vue(Vue.util.extend({ el: '#root', store }, App))


