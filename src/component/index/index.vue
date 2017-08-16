<template>
  <article class="index">
      <v-swipe :list="lunbos"></v-swipe>
      <v-nav></v-nav>
  </article>
</template>

<script>
import Cswipe from '../common/swipe.vue';
import Cnav from './nav.vue'
export default {
    data(){
        return{
            lunbos:[]
        }
    },
    methods:{
        getLunbos(){
            let url = 'http://139.199.192.48:8888/api/getlunbo';
            this.$http.get(url).then(rep =>{
                let body = rep.body;
                if(body.status ==0){
                    this.lunbos = body.message.map(item =>{
                        item.src = item.img;
                        return item;
                    })
                }
            })
        }
    },
    created(){
        this.getLunbos();
    },
    components:{
        'v-swipe':Cswipe,
        'v-nav':Cnav
    }
  
}
</script>

<style>

</style>
