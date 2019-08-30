import Vue from 'vue';
import './assets/styles/index.scss';
import App from './App';
import router from './router/index';
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import tools from '@/common/tools'
import appServices from '@/common/services/appServices'

//全局注册公用方法
Vue.prototype.$tools = tools;               //this.$tools
Vue.prototype.$get = appServices.get;       //this.$get
Vue.prototype.$post = appServices.post;     //this.$post

Vue.use(ElementUI);


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    render: h => h(App)
})

