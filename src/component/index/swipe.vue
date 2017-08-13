<template>
    <section class="swipe">
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for='(item ,i) in list' :key='i'>
                <a :href='item.url'>
                    <img :src='item.img'/>
                    </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getLunbo(){
            this.$http.get('http://139.199.192.48:8888/api/getlunbo').then(resp =>{
                if(resp.body.status == 0){
                    this.list = resp.body.message;
                }
            })
        }
    },
    created(){
        this.getLunbo();
    }
}
</script>

<style lang='less'>
    .swipe{
        height: 300px;
        img{
        width: 100%;
        height: 100%;
        }
    }
</style>
