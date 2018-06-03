<template>
        <div>
            <van-nav-bar
                    title="商品列表"
                    left-text="返回"
                    left-arrow
                    :fixed="true"
                    @click-left="onClickLeft"
            />
            <div class="choose-title" flex>
                <div class="item">综合</div>
                <div class="item">价格</div>
                <div class="item">销量</div>
            </div>
            <div class="product-list">
                <van-row>

                    <van-col v-for="goods in goodsList" span="12">
                            <router-link :to="{ path: '/goods', query: { sku:'sku' }}" >
                            <img class="pic-url" :src="goods.pic"/>
                            <span class="pic-title">{{goods.title}}</span>
                            <span class="pic-price">￥{{goods.price}}</span>
                            </router-link>
                    </van-col>
                    
                </van-row>

            </div>
            <div class="bottom"></div>
        </div>
</template>

<script>
import Req from './../src/req.js';
export default {
    data(){
        return {
            //业务数据
            goodsList:[
                {
                    title:'马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）',
                    price:100,
                    pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png'
                },
                {
                    title:'马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）',
                    price:100,
                    pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png'
                },
                {
                    title:'马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）',
                    price:100,
                    pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png'
                },
                {
                    title:'马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）',
                    price:100,
                    pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png'
                },
                {
                    title:'马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）',
                    price:100,
                    pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png'
                }
            ]
        }
    },
    created(){
         Req.request('/goodsList',{},(response) => {
                this.goodsList = response.data.goodsList;
         });
    },
    methods:{
        onClickLeft(){
            this.$router.back();
        }
    }
}
</script>

<style>
.choose-title{
    background: #fff;
    z-index: 1000;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left:0px;
    right:0px;
    width: 100%;
    height:60px;
    border-bottom:solid 1px #e2d9d9;
    border-top: solid 1px #e2d9d9;
    margin-top: 45px;
}
.item{
    display: inline-block;
    width: 32%;
    text-align: center;
    height: 50px;
    line-height: 50px;
   
}
.item :active{
    color: #ff4544;
}
.product-list{
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 105px;
}

.product-list .van-col{
    background: #fff;
    text-align: center;
}

.pic-url{
    width: 160px;
    height: 160px;
}
.pic-title{
    padding: 10px 5px 10px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
    display:block;
    text-align: center;
}
.pic-price{
    color:#ff4544;
    display: block;
    text-align: center;
    padding-bottom: 5px;
}
.bottom{
    height: 50px;;
}
</style>
