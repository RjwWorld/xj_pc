// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import animated from 'animate.css'
import { Swipe, SwipeItem } from 'vant';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Swipe).use(SwipeItem);
Vue.use(animated);
Vue.use(ElementUI);
Vue.use(iView);
Vue.prototype.$qs = qs;
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
  return config
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$ajax = axios;
Vue.prototype.HOST = '/api';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

Vue.prototype.goto = function(path){
  this.$router.push({path:path})
};
// 全局处理返回码
Vue.prototype.errorstatus = function (error) {
    switch (error.response.status) {
      case 404:
        this.$message.error('not found');
        break;
      case 500:
        this.$message.error('500');
        break;
      default:
        this.$message.error('服务器走神了')
    }
};
Vue.prototype.formerror = function (error) {
  switch (error.response.status) {
    case 484:
      this.$message.error('您输入的参数缺失,请重新输入');
      break;
    case 473:
      this.$message.error('您输入的邮箱或手机号有误,请重新输入');
      break;
    case 400:
      this.$message.error('当前手机号已被记录过，无需重新注册');
      setTimeout(function () {
        location.href="http://www.jzsjfw.com:8000/#/";
      },3000)
      break;
    case 476:
      this.$message.error('图片验证码异常');
      break;
    case 481:
      this.$message.error('数据库查询异常');
      break;
    default:
      this.$message.error('您输入的信息有误，请重新输入');
  }
}
