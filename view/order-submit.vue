<template>
    <div>


    <div class="order-sumbit">
        <van-nav-bar
                title="结算"
                left-text="返回"
                left-arrow
                :fixed="true"
                 @click-left="onClickLeft"
        />

        <router-link :to="{ path: '/address-list', query: { source: 'order-submit' }}" >
        <div class="address">
            <van-cell :title="orderInfo.address.name" :value="orderInfo.address.tel" :label="'收货地址：'+orderInfo.address.address" is-link />
        </div>
        </router-link>

        <van-cell title="预约送达时间" @click="sendTypeShow = true" is-link :value="sendTypeText"/>
        <span class="fill"></span>

        <van-cell title="支付方式" @click="payTypeShow = true" is-link :value="payTypeItems[orderInfo.payType]"/>
        <span class="fill"></span>

        <ul class="goodsLst">
            <li v-for="goods in orderInfo.goodsList" >
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


        <van-popup v-model="payTypeShow" position="bottom" :overlay="false">
            <van-picker
                    show-toolbar
                    title="选择支付方式"
                    :columns="payTypeItems"
                    @confirm="payTypeConfirm"
                    @cancel="payTypeCancel"
            />
        </van-popup>

        <van-popup v-model="sendTypeShow" position="bottom" :overlay="false">
            <van-picker
                    show-toolbar
                    title="选择支付方式"
                    :columns="sendType"
                    value-key="title"
                    @confirm="sendTypeConfirm"
                    @cancel="sendTypeCancel"
            />
        </van-popup>
    </div>

</template>

<script>
    import Req from './../src/req.js';
    export default {
        data(){
            return {
                payTypeShow:false,
                payTypeItems:['在线支付','货到付款'],
                isShow:false,
                remark:'',

                //
                sendTypeShow:false,
                sendTypeText:'下单后半小时',
                //
                sendType:[
                        {title:'18:30 - 19:00',type:1,time:1232321},
                        {title:'18:30 - 19:00',type:1,time:1232321},
                        {title:'18:30 - 19:00',type:1,time:1232321}
                ],
                //业务数据
                orderInfo:{
                    address:{
                        name:'~~~~~',
                        tel:'18523922709',
                        address:'重庆市渝北区环山国际'
                    },
                    sendType:1,
                    sendTime:0,
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
        },
        created(){
            let goodsList = JSON.parse(this.$route.query.goodsList);
            Req.request('/preOrder',{goodsList:goodsList},(response) => {
                this.orderInfo = response.data.orderInfo;
            });
        },
        methods:{
            onSubmit(){
                if(!this.orderInfo.payType){
                    return this.$toast.fail('未选择支付方式');

                }
                if(!this.orderInfo.address.tel || this.orderInfo.address.address){
                    return this.$toast.fail('地址信息不全');
                }
                Req.request('/submitOrder',{orderInfo:this.orderInfo},(response) => {
                    
                    //pay
                    console.log(this.orderInfo);
                    //
                    this.$router.push({path:'/order-list',query:{status:1}});
                });
            },
            onClickLeft(){
                this.$router.back();
            },
            payTypeConfirm(value, index){
                this.orderInfo.payType = index;
                this.payTypeShow = false;
            },
            payTypeCancel(){
                this.payTypeShow = false;
            },
            sendTypeConfirm(value, index){
                this.orderInfo.sendType = value.type;
                this.orderInfo.sendTime = value.time;
                this.sendTypeText = value.title;
                this.sendTypeShow = false;
            },
            sendTypeCancel(){
                this.sendTypeShow = false;
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