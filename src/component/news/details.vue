<template>
    <section class="list">
        <v-title :title="title"></v-title>
        <div class="mui-card">
				<div class="mui-card-header">{{news.title}}</div>
				<div class="mui-card-footer">
                       <span>创建时间:{{news.add_time | formatDate('YYYY-MM-DD') }}</span>       
                        <span>点击量:{{news.click}}</span>    
                </div>
                <div class="mui-card-content">
					<div v-html="news.content" class="mui-card-content-inner">
						
					</div>
				</div>
			</div>
    </section>
</template>

<script>
import config from '../../js/config.js';
import Ctitle from '../common/title.vue';
export default {
    data(){
        return{
             title:'新闻详细',
            news:{}
           
        }
    },
    methods:{
        getDetatils(){
            let url = config.newsDetails + this.$route.params.id;
            this.$http.get(url).then(rep => {
                rep.body.status == 0 && (this.news = rep.body.message[0])
            })
        }
    },
    created(){
        this.getDetatils();
    },
    components:{
        'v-title':Ctitle
    }
  
}
</script>

<style lang="less">

</style>
