/**
 * Created by chenxuhua on 2017/9/6.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);



export default new Router({
    routes: [
        {
            path: '/test',
            component: function (resolve) {
                require(['@/components/test'], resolve);
            }
        },
        {
            path: '/',
            component: function (resolve) {
                require(['@/components/Login'], resolve);
            }
        },
        {
            path: '/login',
            component: function (resolve) {
                require(['@/components/Login'], resolve);
            }
        },
        {
            path: '/index',
            component: function (resolve) {
                require(['@/components/Index'], resolve);
            }
        },
        {
            path: '/productDetail',
            component: function (resolve) {
                require(['@/components/ProductDetail'], resolve);
            }
        },
    ]
})



