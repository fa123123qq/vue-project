// 一.导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// MintUI是vue插件，将来需要手动use才可以使用
import MintUI from 'mint-ui';
import {Indicator} from 'mint-ui';
import 'mint-ui/lib/style.min.css';
//引入图片预览插件
import vuePicturePreview from 'vue-picture-preview';

// 引入mui样式
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

import Vuex from 'vuex';

// 1.1记得手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(vuePicturePreview);
Vue.use(Vuex);

Vue.http.interceptors.push(function (req,next) { 
    // 在这里我们可以做一些请求之前的事情
    Indicator.open('loading...');

    // 如果需要发送请求，请调用next方法，next方法我们也可以通过回调的方式对返回结果进行统一处理。
    next(function (rep) { 
        // alert('请求完毕了');
        Indicator.close();
     })
 })

//二.导入自己的组件


// 2.1导入过滤器
import './filter.js';

//2.1导入自己的组件
import ComptApp from '../component/App.vue' //根组件

import router from './router.js';       //路由

import Vgoods from './vuex/goods.js'    //管理购物车数量

//创建一个Vue实例,关联视图,把根组件渲染到视图中
new Vue({
    el:'#app',
    render:c => c(ComptApp),
    router,
    // store:new Vuex.Store({
    //     state:{
    //          // 相当于咱们之前的data配置
    //         count:200
    //     },
    //     getters:{
    //         // 提供一个获取数据方法，这个方法会接收到state数据对象，
    //          // 由我们自由去返回数据，也可以对数据进行加工后再返回
    //         getCount(state){
    //             return state.count;
    //         }
    //     },
    //     mutations:{
    //         // 修改count方式1，自增
    //         countAdd(state){
    //             state.count++;
    //         },
    //         // 修改count方式2，覆盖
    //         setCount(state,val){
    //             state.count = val;
    //         }
    //     }
    // })
    store: new Vuex.Store(Vgoods)
     
})