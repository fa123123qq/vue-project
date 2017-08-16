<template>
    <section class="swipe">
        <mt-swipe :auto="1000">
            <mt-swipe-item v-for='(item ,i) in list' :key='i'>
                <a :href='item.url'>
                    <img :src='item.src'/>
                    </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
//把公共的轮播图抽取出来
export default {
  props:['list']
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