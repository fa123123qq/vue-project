<template>
    <section class="list">
        <v-title :title="title"></v-title>
         <ul class="mui-table-view">
				<li v-for="item in list" :key='item.id' class="mui-table-view-cell mui-media">
					<router-link :to="'/news/details/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="mui-ellipsis">{{item.title}}</p>
						       <div class="list_item">
                                <p>创建时间:{{item.add_time | formatDate('YYYY-MM-DD') }}</p>       
                                <p>点击量:{{item.click}}</p>       
                             </div>
						</div>
					</router-link>
				</li>
			</ul>
    </section>
</template>

<script>
import config from '../../js/config.js';
import Ctile from '../common/title.vue';
export default {
    data(){
        return {
            list:[],
            title:'新闻咨询'
        }
    },
    methods:{
        getNews(){
            let url = config.newsList;
            this.$http.get(url).then(rep =>{
                rep.body.status == 0 && (this.list = rep.body.message);
            })
        }
    },
    created(){
        this.getNews();
    },
    components:{
        'v-title':Ctile
    }
}
</script>

<style lang='less'>
    .list{
         &_item p{
            display: inline-block;
        }
    }
</style>
