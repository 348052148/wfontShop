<template>

    <div class="cart">

        <div class="cartTop">
            <van-icon name="shopping-cart" />
            自营商品30分钟送达
        </div>

        <div class="cartContent">

            <div v-for="goods in cartInfo.goodsList" class="cartItem">
                <van-checkbox @change="cacluePrice" v-model="goods.isCheck"></van-checkbox>
                <div class="cartPic">
                    <img :src="goods.pic"/>
                </div>

                <div class="cartInfo">
                    <div class="title">{{goods.title}}</div>
                    <ul>
                        <li>规格：{{goods.specifText}}</li>
                    </ul>
                    <span class="amount">￥{{goods.price}}</span>
                    <div class="plus">
                        <van-stepper @change="cacluePrice" v-model="goods.num" />
                    </div>

                </div>
            </div>

        </div>




        <van-submit-bar
                :price="cartInfo.totalPrice"
                button-text="提交订单"
                @submit="onSubmit"
        >
            <van-checkbox @change="allchange" v-model="checked">全选</van-checkbox>
            <span slot="tip">
    您的收货地址不支持同城送, <span>修改地址</span>
  </span>
        </van-submit-bar>


        <Tabbar/>
    </div>
</template>

<script>
    import Tabbar from './tabbar.vue';
    import Req from './../src/req.js';
    export default {
        components: {
            Tabbar
        },
        data(){
          return {
              checked:false,
              cartInfo:{
                  goodsList:[
                      {
                          title:'为家清洁毛巾',
                          pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png',
                          specifText:'ping',
                          units:1,
                          num:1,
                          price:14,
                          total:14,
                          isCheck:false,
                      },
                      {
                          title:'为家清洁毛巾',
                          pic:'http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png',
                          specifText:'ping',
                          units:1,
                          num:1,
                          price:14,
                          total:14,
                          isCheck:true,
                      },
                  ],
                  totalPrice:2800
              }
          }
        },
        created(){
            Req.request('/cart',{},(response) => {
                this.cartInfo = response.data.cartInfo;

                this.cacluePrice();
            });
        },
        methods: {
            onClose(clickPosition, instance) {
                switch (clickPosition) {
                    case 'left':
                    case 'cell':
                    case 'outside':
                        instance.close();
                        break;
                    case 'right':
                        Dialog.confirm({
                            message: '确定删除吗？'
                        }).then(() => {
                            instance.close();
                        });
                        break;
                }
            },
            onSubmit(){
                let goodsList = [];
                this.cartInfo.goodsList.forEach(element => {
                    if(element.isCheck){
                        goodsList.push({
                            sku:element.sku,
                            units:element.units,
                            num:element.num
                        });
                    }
                });

                this.$router.push({path:'/order-submit',query:{
                    goodsList:JSON.stringify(goodsList)
                }});
            },
            cacluePrice(){

                let price = 0;

                this.cartInfo.goodsList.forEach(element => {
                    if(element.isCheck){
                        price+=element.price*element.num;
                    }
                    
                });

                this.cartInfo.totalPrice = price*100;
            },
            allchange(){
                this.cartInfo.goodsList.forEach(element => {
                    element.isCheck = this.checked;
                });

                this.cacluePrice();
            }
        }
    }
</script>

<style>
    .cart .van-submit-bar{
        margin-bottom: 50px;
    }

    .cart .cartContent{
        overflow: auto;
        margin-bottom: 138px;
    }

    .cartTop {
        display: inline-block;
        width: 100%;
        height: 50px;
        background: #fff;
        font-size: 12px;
        line-height: 50px;
    }
    .cartTop .van-icon{
        width: 40px;
        height: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 30px;
    }
    .cartTop span{
        display: inline-block;
        line-height: 50px;
    }
    .cartItem{
        background: #fff;
        width: 100%;
        display: inline-block;
        font-size: 12px;
        margin-top: 1px;
        padding-top: 5px;
        padding-bottom: 15px;
    }
    .cartItem .van-checkbox{
        width: 10%;
        display: inline-block;
        height: 100%;
        line-height: 80px;
        text-align: center;
    }
    .cartItem .cartPic{
        width: 30%;
        display: inline-block;
        height: 100%;
    }
    .cartItem .cartPic img {
        width: 80px;
        height: 80px;
    }
    .cartItem .cartInfo{
        width: 55%;
        display: inline-block;
        height: 100%;
        float: right;
    }
    .cartItem .cartInfo .title{
        display: inline-block;
    }
    .cartItem .cartInfo ul li{
        font-size: 12px;
        display: inline-block;

    }
    .cartItem .cartInfo .amount{
        color: crimson;
    }
    .cartItem .cartInfo .plus{
        display: inline-block;
        height: 24px;
        background: #eeeeee;
        margin-left: 40px;
    }
    /* .cartItem .cartInfo .plus button{
        width: 24px;
        height: 24px;
        border: none;
        background: #ccc;
    }
    .cartItem .cartInfo .plus span{
        width: 24px;
        height: 24px;
        display: inherit;
        text-align: center;
        border: none;
        align-items: center;
    } */
</style>