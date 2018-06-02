<template>
    <div>
        <div class="user"  >
            <div class="userinfo">
                    <div  class="avater" >
                        <img style="border-radius:30px;" src="http://imgsrc.baidu.com/imgad/pic/item/adaf2edda3cc7cd92e8bcdfc3301213fb80e9175.jpg" width="60" height="60" />
                        <span>{{user.nickname}}</span>
                    </div>

                <div class="shortcut" >
                    <!--<ul>-->
                        <!--<li><img  src="../../assets/icon-order-0.png" width="40" height="40" /></li>-->
                        <!--<span class="Fill"></span>-->
                        <!--<li><img  src="../../assets/icon-order-0.png" width="40" height="40" /></li>-->
                    <!--</ul>-->
                </div>

            </div>

            <div class="order">
                <van-cell title="我的订单" icon="location" value="所有订单" is-link />
                <span class="DS"></span>
                <van-row>
                    <van-col span="6">
                        <div class="icon">
                            <van-icon name="pending-payment"  info="5" />
                        </div>

                        待付款
                    </van-col>
                    <van-col span="6">
                        <div class="icon">
                        <van-icon name="pending-deliver" />
                        </div>
                        待发货</van-col>
                    <van-col span="6">
                        <div class="icon">
                        <van-icon name="tosend" />
                        </div>
                        待收货</van-col>
                    <van-col span="6">
                        <div class="icon">
                        <van-icon name="pending-orders" />
                        </div>
                        待评价</van-col>
                </van-row>
            </div>

            <van-cell-group>

                <van-cell title="地址" icon="location" is-link />
                <span class="DS"></span>
                <van-cell value="优惠" icon="shop" is-link>
                    <template slot="title">
                        <span class="van-cell-text">优惠卷</span>
                        <van-tag type="danger">新</van-tag>
                    </template>
                </van-cell>



            </van-cell-group>

        </div>




        <Tabbar/>
    </div>
</template>

<script>
    import Tabbar from './tabbar.vue';
    export default {
        components: {
            Tabbar
        },
        name: 'app',
        data:function(){
            return {
                user:{nickname:'未登录',tourl:"/login"}
            };
        },
        created(){

        }
    }
</script>

<style>
    .order{
        background: #fff;
        margin-bottom: 8px;
    }
    .order .van-col{
        height: 60px;
        text-align: center;
        font-size: 12px;
    }
    .order .van-col .icon {
        margin-top: 10px;
        display: inline-block;
        width: 100%;
        font-size: 20px;
        text-align: center;
    }

    /**分割操作 */
    *{padding:0;margin:0;}
    a{
        color:#333;
        text-decoration: none;
    }
    .Fill{
        display:inline-block;
        width:7rem;
        height:100%;
    }
    .DS{
        display:block;
        width:94%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .user{
        width:100%;
        background:#eee;
        overflow: hidden;
        position:absolute;
        top: 0px;
        bottom: 0px;
    }
    /**用户信息 */
    .user .userinfo{
        width:100%;
        height:10rem;
        display:inline-block;
        background:url('../assets/img-user-bg-new.png')
    }
    .user .userinfo .avater {
        margin:0 auto;
        margin-top:2rem;
        width:7.5rem;
        text-align:center;
    }
    .user .userinfo .avater span{
        display:inline-block;
        margin-top:0.31rem;
        width:100%;
        text-align:center;
    }
    /**快捷 */
    .user .userinfo .shortcut{
        display:none;
        margin-top:1.25rem;
        width:100%;
    }
    .user .userinfo .shortcut ul {
        width:13rem;
        list-style-type:none;
        list-style:none;
        margin:0 auto;
    }
    .user .userinfo .shortcut ul li{
        display:inline-block;
    }
    /**功能列表 */
    .user .func{
        width:100%;
        background:#fff;
        display:inline-block;
    }
    .user .func ul {
        list-style-type:none;
        list-style:none;
        margin-top:0.62rem;
    }
    .user .func ul li{
        width:100%;
        height:2.5rem;
        color:#666;
        margin-left:0.9rem
    }
    .user .func ul li img{
        display:inline-block;
        width: 1.3rem;
        height: 1.3rem;
        margin-right:0.9rem;
        line-height:2.5rem;
        vertical-align: middle;
    }
    .user .func ul li span{
        padding-bottom:0.625rem;
        text-indent:1.25rem;
        width:100%;
        line-height:2.5rem;
        font-size:0.9rem;
    }
</style>