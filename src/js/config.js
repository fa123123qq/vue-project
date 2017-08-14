const domain = 'http://139.199.192.48:8888';
export default{
    //暴漏域名和新闻相关的url
    domain:domain,
    newsList : domain + '/api/getnewslist',
    newsDetails : domain + '/api/getnew/',

    commentPut: domain +'/api/postcomment/',
    commentList: domain + '/api/getcomments/'
    
}