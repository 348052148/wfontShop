<template>
    <div class="goods">
        <div>
             <van-nav-bar
                title="结算"
                left-text="返回"
                left-arrow
                :fixed="true"
                 @click-left="onClickLeft"
            />
            <div>
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="pic in goodsInfo.pics">
                        <img style="width: 100%;height: 250px;" :src="pic">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div>
                <van-notice-bar :scrollable="false">
                    优惠活动：特价
                </van-notice-bar>
            </div>
            <div class="info">
                <h5>{{goodsInfo.title}}</h5>

                <div class="desc">
                    <span>￥{{goodsInfo.price}}<del>￥{{goodsInfo.organalPrice}}</del></span>
                    <ul>
                        <li>销量：{{goodsInfo.saleVolume}} {{goodsInfo.specifTitle}}</li>
                        <li>规格：{{goodsInfo.specifTitle}}</li>
                    </ul>
                </div>

                <span class="DS"></span>
                <div class="tags">
                    <ul>
                        <li><van-icon name="passed" />&nbsp;新品</li>
                        <li><van-icon name="passed" />自营商品</li>
                        <li><van-icon name="passed" />正品保证</li>
                        <li><van-icon name="passed" />30分钟送达</li>
                    </ul>
                </div>
            </div>


            <van-tabs v-model="active">
                <van-tab >
                    <div slot="title">
                        <van-icon name="more-o" />详情
                    </div>
                    通过sticky属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶
                </van-tab>

                <van-tab >
                    <div slot="title">
                        <van-icon name="more-o" />评价
                    </div>
                    内容
                </van-tab>
            </van-tabs>


        </div>


        <van-sku
                v-model="skuModel"
                :sku="sku"
                :goods="goods"
                :goods-id="123"
                :hide-stock="sku.hide_stock"
                :quota="0"
                :quota-used="0"
                @add-cart='addCart'
                @buy-clicked="buy"
        />

        <van-goods-action>
            <van-goods-action-mini-btn icon="chat" text="客服" @click="onCall" />
            <van-goods-action-mini-btn icon="cart" text="购物车" @click="onCart" />
            <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
            <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
        </van-goods-action>

    </div>
</template>

<script>
    import Req from './../src/req.js';
    export default {
        created(){

            Req.request('/goods',{},(response) => {
                this.goodsInfo = response.data.goodsInfo;


                  this.sku ={
                    tree: [
                        {
                            k: '规格', // skuKeyName：规格类目名称
                            v: [

                            ],
                            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                        }
                    ],
                    list: [

                    ],

                    price: '24.00', // 默认价格（单位元）
                    stock_num: 227, // 商品总库存
                    collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                    none_sku: false, // 是否无规格商品

                    hide_stock: false // 是否隐藏剩余库存
                };

                //
                for (let i = 0; i < this.goodsInfo.specif.length ; i++) {
                    let specif = this.goodsInfo.specif[i];
                    this.sku.tree[0].v.push({
                        id:specif.units,
                        name:specif.title+'('+specif.units+')',
                        imgUrl:specif.pic
                    });

                    this.sku.list.push({
                        id:this.goodsInfo.sku,
                        price:specif.price,
                        s1:specif.units,
                        stock_num:100
                    });
                }

                //
                this.goods = {
                    // 商品标题
                    title: this.goodsInfo.title,
                    // 默认商品 sku 缩略图
                    picture: this.goodsInfo.pic
                }

                
            });

        },
        data(){
          return {
              active:0,
              //业务数据
              goodsInfo:{
                  title: '思蕴语露面巾 （颜色随机 毛巾）',
                  sku:'20180607',
                  price:'24.00',
                  organalPrice:'28.00',
                  pic:'http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png',
                  pics:[
                      'http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png',
                      'http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png',
                      'http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png'
                  ],
                  units:1,
                  saleVolume:100,
                  specifTitle:'瓶',
                  specif:[
                      {units:1,title:'瓶',pic:'https://img.yzcdn.cn/1.jpg',price:1},
                      {units:12,title:'件',pic:'https://img.yzcdn.cn/2.jpg',price:12}
                  ],
              },

              skuModel:false,
              goods: {
                  // 商品标题
                  title: '思蕴语露面巾 （颜色随机 毛巾）',
                  // 默认商品 sku 缩略图
                  picture: 'https://img.yzcdn.cn/1.jpg'
              },
              sku: {
                  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                  tree: [
                      {
                          k: '规格', // skuKeyName：规格类目名称
                          v: [
                              {
                                  id: '1', // skuValueId：规格值 id
                                  name: '瓶（1）', // skuValueName：规格值名称
                                  imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                              },
                              {
                                  id: '24',
                                  name: '件（24)',
                                  imgUrl: 'https://img.yzcdn.cn/2.jpg'
                              }
                          ],
                          k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                      }
                  ],
                  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                  list: [
                      {
                          id: 2259, // skuId，下单时后端需要
                          price: 100, // 价格（单位分）
                          s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
                          stock_num: 110 // 当前 sku 组合对应的库存
                      },
                      {
                          id: 2259, // skuId，下单时后端需要
                          price: 2400, // 价格（单位分）
                          s1: '24', // 规格类目 k_s 为 s1 的对应规格值 id
                          stock_num: 110 // 当前 sku 组合对应的库存
                      }
                  ],
                  price: '24.00', // 默认价格（单位元）
                  stock_num: 227, // 商品总库存
                  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                  none_sku: false, // 是否无规格商品

                  hide_stock: false // 是否隐藏剩余库存
              },

          }
        },
        methods: {
            onCall() {
                // Toast('点击图标');
                this.skuModel = true;
            },
            onCart(){
                this.$router.push({path:'/cart',query:{}});
            },
            onClickBigBtn() {
                // Toast('点击按钮');
                this.skuModel = true;
            },
            addCart(skuData){
                console.log(skuData)
                let goods ={sku:this.goodsInfo.sku,units:this.goodsInfo.units,num:skuData.selectedNum};
                Req.request('/addCart',{goods:goods},(response) => {
                    this.$router.push({path:'/cart',query:{}});
                });
            },
            buy(skuData){
                console.log(skuData)
                 this.$router.push({path:'/order-submit',query:{
                     goodsList:JSON.stringify([
                         {sku:this.goodsInfo.sku,units:this.goodsInfo.units,num:skuData.selectedNum}
                     ])
                 }})
            },
            onClickLeft(){
                this.$router.back();
            }
        }
    }
</script>

<style>
    *{padding:0;margin:0;}
    .goods .van-swipe{
        margin-top: 45px;
    }
    .goods{
        width: 100%;
        overflow: auto;
        margin-bottom: 50px;
    }
    .DS{
        display:block;
        width:94%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .info{
        background: #fff;
    }
    .info h5{
        width: 100%;
        display: inline-block;
    }

    .info .desc{
        width: 100%;
        display: inline-block;
        padding-bottom: 10px;

    }
    .info .desc span{
        color: red;
        display: inline-block;
        width: 100px;
    }
    .info .desc span del{
        font-size: 10px;
        display: inline-block;
        color: #666;
        text-indent: 50px;
    }
    .info .desc ul{
        display: inline-block;
    }
    .info .desc ul li{
        width: 80px;
        font-size: 10px;
        color: #666;
        display: inline-block;
    }

    .info .tags{
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    .info .tags ul li{
        display: inline-block;
        font-size: 10px;
        text-align: center;
        color: #333;
        margin-right: 3px;
    }
    .info .tags ul li .van-icon{
        color: green;
    }
</style>