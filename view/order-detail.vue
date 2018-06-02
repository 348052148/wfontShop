<template>
    <div>
        <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
/>
        <div class="order-status"><span>已取消</span></div>
        <div class="address-item">
            <div class="user-msg">
                <span>收货人：加号</span>
                <span style="float:right">18883771802</span>
            </div>
            <div style="clear:both;"></div>
            <div><span>地址：重庆市渝北区康乐镇枇杷山整洁</span></div>
        </div>
        <div class="order-item">
            <div class="order-msg">
                <span>订单编号：ML18000211</span>
                <span style="float:right"><van-button size="mini" type="default">复制</van-button></span>
            </div>
            <div style="clear:both;"></div>
            <div><span>下单时间：2018-05-26 17:00:00</span></div>
        </div>
        <div class="pay-type">
            <div class="pay-msg">
                <span>支付方式</span>
                <span style="float:right">在线支付</span>
            </div>
            <div style="clear:both;"></div>
        </div>
        <div class="product">
            <div class="product-msg">
                <span>商品总额</span>
                <span style="float:right">￥60</span>
            </div>
            <div class="product-msg">
                <span>买家留言</span>
                <span style="float:right">周灰灰是个大笨蛋</span>
            </div>
            <div style="clear:both;"></div>
            <div style="border-bottom:solid 1px rgb(212, 209, 209); height:1px; padding-bottom:3px;"></div>
            <span style="float:right;padding-top:5px;">合计：<strong style="color:#ff4544;">￥60</strong></span>
            <div style="clear:both;"></div>
        </div>
        <div class="product-list">
            <div class="order-product">
                <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp">
                <div class="product-text">
                    <span>可口可乐美国鹰爪功能饮料330ml</span>
                    <span class="specification">规格：片</span>
                    <div class="product-price">
                        <span><strong style="color:#ff4544;">￥6</strong>X1</span><span style="color:#ff4544;float:right;">小计：￥6</span>
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="order-product">
                <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp">
                <div class="product-text">
                    <span>可口可乐美国鹰爪功能饮料330ml</span>
                    <span class="specification">规格：片</span>
                    <div class="product-price">
                        <span><strong style="color:#ff4544;">￥6</strong>X1</span><span style="color:#ff4544;float:right;">小计：￥6</span>
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
div{
    color:rgb(105, 100, 100);
}
.order-status{
    width: 100%;
    height:50px;
    font-size: 20px;
    background: darkturquoise;
    color: #fff;
}
.order-status span{
    line-height: 50px;
    margin-left: 20px;
}
.address-item,.order-item,.pay-type,.product,.product-list{
    /* width: 100%; */
    height:50px;
    padding: 10px;
    background: #fff;
    align-items: center;
    margin-bottom: 5px;

}
.address-item .user-msg{
    padding-bottom: 5px;
}
.order-item .order-msg{
    padding-bottom: 5px;
}
.pay-type{
    height:20px;
}
.pay-type .pay-msg{
    padding-bottom: 5px;
}
.product{
    height: auto;
}
.product .product-msg{
    padding-bottom: 5px;
}
.product-list{
    height:auto;
    background: #fff;
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

</style>
