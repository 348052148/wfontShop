<template>
    <div class="orderList">
        <van-nav-bar
                title="标题"
                left-text="返回"
                left-arrow
                :fixed="true"
                @click-left="onClickLeft"
        />

        <van-tabs @click="selectStatus" v-model="active">
            <van-tab v-for="item in type_item" :title="item">


            <div v-for="order in orderList" class="order-content">
                <div class="order-top">
                    <span class="order-code">订单号：{{order.orderCode}}</span>
                    <span class="order-status1">{{order.orderStatus}}</span>
                    <div style="clear:both"></div>
                </div>

                <div v-for="goods in order.goodsList" class="order-product">
                    <img class="pic-url" :src="goods.pic">
                    <div class="product-text">
                        <span>{{goods.title}}</span>
                        <span class="specification">规格：{{goods.specif.title}}</span>
                        <div class="product-price">
                            <span><strong style="color:#ff4544;">￥{{goods.price}}</strong>X{{goods.num}}</span>
                            <span style="color:#ff4544;float:right;">小计：￥{{goods.total}}</span>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                </div>

                <div class="action">
                    <span>合计：￥{{order.price}}</span>
                    <div class="order-action" style="float:right;">

                        <van-button v-if="order.status > 5" type="default" size='small'>再次购买</van-button>

                        <van-button v-if="order.status > 1 && order.status<4" type="danger" size='small'>取消</van-button>

                        <van-button v-if="order.status == 1" @click="payProcess(order.id)" :loading="payProcessLoading" type="primary" size='small'>去支付</van-button>

                    </div>

                </div>
                <div style="clear:both"></div>
            </div>


            <div class="bottom"></div>


            </van-tab>

        </van-tabs>
    </div>
    
</template>
<script>
    import Req from './../src/req.js';
export default {
    data() {
    return {
        payProcessLoading:false,
        status:0,
        type_item:['所有','待付款','待发货','待收货','待评价'],
        active: 0,
        orderList:[
            {
                address:{
                    name:'~~~~~',
                    tel:'18523922709',
                    address:'重庆市渝北区环山国际'
                },
                sendType:[
                    {title:'18:30 - 19:00',type:1,time:1232321},
                    {title:'18:30 - 19:00',type:1,time:1232321},
                    {title:'18:30 - 19:00',type:1,time:1232321}
                ],
                payType:1,
                goodsList:[
                    {
                        title:'农夫山泉550ml',
                        pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png',
                        specif:{title:'瓶',units:1},
                        price:2.5,
                        num:2,
                        total:5
                    },
                    {
                        title:'农夫山泉550ml',
                        pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png',
                        specif:{title:'瓶',units:1},
                        price:2.5,
                        num:2,
                        total:5
                    },
                    {
                        title:'农夫山泉550ml',
                        pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png',
                        specif:{title:'瓶',units:1},
                        price:2.5,
                        num:2,
                        total:5
                    }
                ],
                fList:[
                    {title:'收取运费' , price:2}
                ],
                price:1700,
                remark:'',
                orderCode:'JXHY10923213',
                orderStatus:'已取消'

            }
        ]
    };
  },
    created(){
        this.status = this.$route.query.status;
        Req.request('/orderList',{status:this.status},(response) => {
            this.orderList = response.data.list;
        });
    },
    methods:{
        onClickLeft(){
            this.$router.back();
        },
        selectStatus(index,title){
            this.status = index;
            // this.$router.replace({path:'/order-list',query:{status:index}});
            Req.request('/orderList',{status:this.status},(response) => {
                this.orderList = response.data.list;
            });
        },
        payProcess(id){
            this.payProcessLoading = true;
        }
    }
}
</script>
<style>
    .orderList{

    }
 .orderList .van-tabs{
    margin-top: 45px;
 }
.order-content{
    background: #fff;
    padding: 10px;
    margin-bottom: 5px;
}
.order-content .order-top{
    color: rgb(105, 100, 100);
    padding-bottom: 10px;
    border-bottom: solid 0.5px rgb(212, 209, 209);
    font-size: 14px;
}
.order-top .order-status1{
    float: right;
}
.order-product{
    padding: 10px 0;
    border-bottom: solid 0.5px rgb(212, 209, 209);
}
.order-product .pic-url{
    width:100px;
    height:100px;
    float: left;
}
.order-product .product-text{
    width: 65%;
    height:100px;
    float: right;
}
.product-text .specification{
    color: rgb(105, 100, 100);
    font-size: 14px;
}
.product-text span{
    display: block;
    padding-bottom: 7px;
}
.product-price span{
    display: inline;

}
.action{
    padding: 10px 0;
    align-items: center;
}
.bottom{
    height: 50px;;
}

</style>