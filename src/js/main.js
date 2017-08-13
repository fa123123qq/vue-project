// 一.导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// MintUI是vue插件，将来需要手动use才可以使用
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css';

// 引入mui样式
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

// 1.1记得手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

//二.导入自己的组件

//2.1导入自己的组件
import ComptApp from '../component/App.vue' //根组件

import router from './router.js';       //路由

//创建一个Vue实例,关联视图,把根组件渲染到视图中
new Vue({
    el:'#app',
    render:c => c(ComptApp),
    router
})