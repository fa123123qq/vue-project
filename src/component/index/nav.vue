<template>
    <section class="nav">
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to='/news/list'>
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
		                    <div class="mui-media-body">新闻咨询</div>
                            </router-link>
                            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			    <router-link to='/photo/list/0'>
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div>
				    </router-link>
				</router-link>
				</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				    <router-link to='/goods/list'>
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">商品购买</div>
				    </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				    <router-link to="/">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-comment"></span>
		                    <div class="mui-media-body">留言反馈</div>
				    </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				    <router-link to="/">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜一搜</div>
				    </router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			    <router-link to="/">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">设置</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				    <router-link to="/">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
		                    <div class="mui-media-body">关于我们</div>
				    </router-link></li>
		        </ul> 
		</div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang='less'>
  
</style>
