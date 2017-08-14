//导入包
import VueRouter from 'vue-router';

//导入index组件
import Cindex from '../component/index/index.vue';

//导入news组件
import CnewList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';

// 导入photo组件
import CphotoList from '../component/photo/list.vue';
import CphotoDetails from '../component/news/details.vue'


//导出一个路由实例
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        //新闻详细相关路由配置
        {path:'/news/list',component:CnewList},
        {path:'/news/details/:id',component:CnewsDetails},
        //图片分享
         {path:'/photo/list/:id',component:CphotoList,name:'ptLs'},
         {path:'/photo/details/:id',component:CphotoDetails,name:'ptDl'}

    ]
});