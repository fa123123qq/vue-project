// 一.导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 1.1记得手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);

//二.导入自己的组件

//2.1导入自己的组件
import ComptApp from '../component/App.vue'

//创建一个Vue实例,关联视图,把根组件渲染到视图中
new Vue({
    el:'#app',
    render:c => c(ComptApp)
})