<template>
    <div>


    <div class="order-sumbit">
        <van-nav-bar
                title="结算"
                left-text="返回"
                left-arrow
                :fixed="true"
        />

        <div class="address">
            <van-cell :title="orderInfo.address.name" :value="orderInfo.address.tel" :label="'收货地址：'+orderInfo.address.address" is-link />
        </div>

        <van-cell title="预约送达时间" is-link value="下单后半小时"/>
        <span class="fill"></span>

        <van-cell title="支付方式" is-link value="线上支付"/>
        <span class="fill"></span>

        <ul class="goodsLst">
            <li v-for="goods in orderInfo.goodsList">
                <div class="pic">
                    <img style="width: 60px;height: 60px;" :src="goods.pic"/>
                </div>
                <div class="info">
                    <div class="title">{{goods.title}}</div>
                    <span class="specif">规格：{{goods.specif.title}}</span>
                    <span class="amount">￥{{goods.price}} <span style="color: #666;">x{{goods.num}}</span> <span class="total">￥{{goods.total}}</span></span>
                </div>
            </li>
        </ul>

        <span class="fill"></span>

        <van-cell v-for="f in orderInfo.fList" :title="f.title"  :value="'￥'+f.price"/>

        <span class="fill"></span>
        <van-cell-group>
            <van-field
                    v-model="orderInfo.remark"
                    label="留言"
                    type="textarea"
                    placeholder="请输入留言"
                    rows="1"
                    autosize
            />
        </van-cell-group>


        <van-picker
                v-if="isShow"
                show-toolbar
                title="标题"
                :columns="columns"
        />

    </div>
        <van-submit-bar
                :price="orderInfo.price"
                button-text="提交订单"
                @submit="onSubmit"
        />
    </div>

</template>

<script>
    export default {
        data(){
            return {
                isShow:false,
                remark:'',
                //业务数据
                orderInfo:{
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
                    orderCode:'JXHY10923213'

                }
            }
        }
    }
</script>

<style>
    .goodsLst{
        background: #fff;
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .fill{
        display: block;
        width: 100%;
        border-bottom: 3px solid #eeeeee;
    }
    .goodsLst li{
        width: 100%;
        height: 60px;
        display: inline-block;
        background: #fff;
        font-size: 12px;
        padding-bottom: 5px;
        border-bottom: 1px solid #eeeeee;
        padding-top: 5px;
    }

    .goodsLst li .pic{
        display: inline-block;
        width: 23%;
        text-align: center;
    }

    .goodsLst li .info{
        display: inline-block;
        width: 75%;
        float: right;
    }
    .goodsLst li .info .title{
        width: 100%;
        display: inline-block;
    }

    .goodsLst li .info .specif{
        width: 100%;
        display: inline-block;
        font-size: 10px;
        color: #666;
        margin-top: 4px;
    }

    .goodsLst li .info .amount{
        width: 100%;
        display: inline-block;
        color: red;
        font-size: 10px;
        margin-top: 4px;
    }
    .goodsLst li .info .amount .total{
        width: 30px;
        display: inline-block;
        font-size: 12px;
        float: right;
    }

    .order-sumbit {
        margin-bottom: 52px;
    }

    .van-submit-bar__price{
        text-align: left;
        text-indent: 10px;
    }

    .address{
        width: 100%;
        display: inline-block;
        margin-top: 50px;
    }
    .address .van-cell__label{
        width: 220px;
    }
</style>