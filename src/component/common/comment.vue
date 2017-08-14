<template>
    <section class="comment">
        <div class="mui-card">
            <!--提交评论-->
			<div class="mui-card-header">
                <h3>提交评论</h3>
                </div>
				<div class="mui-card-content">
					<textarea v-model="content" id="textarea" rows="5" placeholder="请发表你的看法">
                    </textarea>
                    <button @click="submitComment" type="button" class="mui-btn mui-btn-royal mui-btn-block">提交</button>
				</div>               
			</div>
                 <!--评论列表-->
            <div class="mui-card">
            	<div class="mui-card-header">
                   <h3> 评论列表</h3>
                    </div>
				    <div class="mui-card-content">
                        <ul class="mui-table-view">
                            <li v-for="(item , i ) in list" :key='i' class="mui-table-view-cell">
                                <div>
                                    <span>第{{i+1}}楼</span>
                                    <span>用户:{{ item.user_name }} </span>
                                    <span>发表时间:{{ item.add_time}}</span>
                                        
                                </div>
                                <p>{{item.content}}</p>
                            </li>
                           
                        </ul>
                    <button ref='loadMoreBtn' @click="getComment" type="button" class="mui-btn mui-btn-royal mui-btn-block">提交</button>
				</div>
            </div>
    </section>
</template>

<script>
import config from '../../js/config.js';
import {Toast} from 'mint-ui'
export default {
    //接受来自父指定的title数据
    data(){
        return{
            content:'',
            pageindex:1,
            list:[]
        }
    },
    props:['id'],
    methods:{
        submitComment(){
            let url = config.commentPut + this.id;
            let data = {content:this.content};
            this.$http.post(url,data,{emulateJSON:true}).then(rep =>{
                let body = rep.body;
                // 发布成功后给出提示，并清空输入框
                if(body.status == 0){
                   
                    //提示
                    Toast({
                        message:'操作成功',
                        iconClass:'icon icon-success'
                    });
                    //把数据添加到评论的最前面
                    this.list.unshift({
                        user_name:'NPC',
                        add_time:Date.now(),
                        content:this.content
                    }),
                    // 清空输入框，记得放在最后清空
                     this.content = '';
                }
                })
            },
        getComment(){
            let url = `${config.commentList + this.id}?pageindex=${this.pageindex}`;
            this.$http.get(url).then(rep =>{
                let body = rep.body;
                if(body.status == 0 && body.message.length >0){
                    this.list.push(...body.message);
                    this.pageindex++;
                }else{
                    this.$refs.loadMoreBtn.disabled = true;
                }
            })
            }
        },
        created(){
            this.getComment();
        }

}
</script>

<style lang='less'>
   .comment {
      .mui-card-content {
        padding: 4px 8px;
        p {
            background-color: rgba(0, 0, 0, .3);
            color: #333;
        }
      }
      .mui-btn-success {
          background-color: #1be4db;
          border-color: #1be4db;
      }
  }
</style>
