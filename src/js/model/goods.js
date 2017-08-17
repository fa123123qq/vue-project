import storage from '../common/storage.js';

const storageKey = 'goodsTotal';
let goodsTotal = storage.get(storageKey) || {};
export default{
    //根据id存储选择数量
    set(id,total){
        goodsTotal[id] = total;
        storage.set(storageKey,goodsTotal);
    },
    //有id返回对象的值,没有id返回所有的数量,没有就返回0
    get(id){
        if(id){
            return goodsTotal[id] || 0;
        }else{
            let totals = this.getTotalList();
            return totals.length && totals.reduce((v1,v2)=>(+v1)+(+v2));
        }
    },
    //获取所有id组成的数组
    getIDList(){
        return Object.keys(goodsTotal);
    },
    //获取所有total组成的数组
    getTotalList(){
        return Object.values(goodsTotal);
    }
};
// 目前咱们完成的这个商品选购存取，操作的都是内存，关闭页面，数据丢失
// 还需要和localStorage做一个关联：
// 1.1、在初始化goodsTotal的值的时候，应该先尝试着从localStorage里面取值
// 1.2、在set的时候，需要把goodsTotal的值存储到localStorage里