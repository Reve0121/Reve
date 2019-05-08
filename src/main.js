import Vue from 'vue';
import './assets/styles/index.scss';
import App from './App';
import router from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import tools from '@/common/tools'
import appServices from '@/common/services/appServices'

//全局注册公用方法
Vue.prototype.$tools=tools;
Vue.prototype.$get=appServices.get;
Vue.prototype.$post=appServices.post;

Vue.use(iView);


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    render: h => h(App)
})

