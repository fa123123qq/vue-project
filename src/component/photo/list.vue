<template>
    <section class="imgList">
        <!--图片选项卡 -->
          <ul class="mui-table-view">
				 <li class="mui-table-view-cell">
                    <router-link to="/photo/list/0">全部</router-link>
                 </li>
		         <li class="mui-table-view-cell" v-for="item in categorylist" :key="item.id">
                    <router-link :to="'/photo/list/' + item.id">{{item.title}}</router-link>
                 </li>
			</ul>
        <!--图片列表-->
        <div class="mui-card" v-for="item in photoList" :key="item.id">
			 <router-link :to="{ name: 'photoD', params: { id: item.id } }">
          <div class="mui-card-header">
              <!--懒加载图片的使用-->
            <img v-lazy="item.img_url" />
          </div>
        </router-link>

				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>{{item.title}}</p>
						<p style="color: #333;">{{item.zhaiyao}}</p>
					</div>
				</div>
			</div>
    </section>
   
</template>

<script>
import config from '../../js/config.js';
import HTTP from '../../js/common/http.js';
 
export default {
    data() {
        return {    
            categorylist:[],
            photoList:[]
        }
    },
     // 实例身上有一个$route属性，当前页面变化时，这个属性的值也会跟着变化,
    // 只要页面一变化，那么就根据新的id渲染图片列表
    watch:{
        $route(){
            this.getPhotoList(this.$route.params.id);
        }
    },
    methods:{
        // 获取分类列表
        getCategoryList(){
            let url = config.photoCategoryList;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                body.status == 0 &&(this.categorylist = body.message)
            })
        },
        // 获取图片列表
        getPhotoList(id){
            let url = config.photoList + id;
            // this.$http.get(url).then(rep => {
            //     let body = rep.body;
            //   if(body.status == 0){
            //      this.photoList = body.message.map(function (photo,i) { 
            //          photo.img_url = config.imgDomain + photo.img_url;
            //          return photo;
            //       })
            //   }  
            // })
            HTTP.get(url,body =>{
                //遍历图片列表,修改每一个图片对象的img_url地址
                this.photoList = body.message.map(function (photo,i) {
                    //由于缓存读取时多了一的config.imgDomain,会导致请求失败,所以去掉
                    photo.img_url = photo.img_url.replace(new RegExp(config.imgDomain), "");
                     photo.img_url = config.imgDomain + photo.img_url;
                     return photo;
                  })
            })
        },
         // 获取背景style
         getStyle(item){
         return 'height:40vw; background-image:url("' + item.img_url + '")';
         }
    },
    // 页面一进来就要获取分类列表，然后根据url中附带的id获取图片列表
    created(){
        this.getCategoryList();
        this.getPhotoList(this.$route.params.id);
        }
}

</script>

<style lang='less'>
   .imgList{
       .mui-table-view{
           overflow: hidden;
           &-cell{
               float: left;
           }
       }
         .mui-card-header img {
      width: 100%;
      height: 100%;
      //懒加载插件的样式
      &[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }
   }
</style>
