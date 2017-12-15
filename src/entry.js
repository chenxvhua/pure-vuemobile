/**
 * Created by chenxuhua on 2017/9/6.
 */
import Vue from 'vue'
import router from '@/router'
import App from '@/App'
import store from '@/store/'
//自定义加载区start
// import '@/css/reset.css';
import 'normalize.css';
import '@/css/main.css';
//自定义加载区end


new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});

