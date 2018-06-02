<template>
    <div>
        <van-tabs v-model="active">
            <van-tab :title="'所有'">
            <div class="order-content">
                <div class="order-top">
                    <span class="order-code">订单号：ML18005211</span>
                    <span class="order-status">已取消</span>
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
                <div class="action">
                    <span>合计：￥1</span>
                    <div class="order-action" style="float:right;">
                        <van-button type="default" size='small'>再次购买</van-button>
                    </div>
                    
                </div>
                <div style="clear:both"></div>
            </div>

            <div class="order-content">
                <div class="order-top">
                    <span class="order-code">订单号：ML18005211</span>
                    <span class="order-status">已取消</span>
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
                <div class="action">
                    <span>合计：￥1</span>
                    <div class="order-action" style="float:right;">
                        <van-button type="default" size='small'>再次购买</van-button>
                    </div>
                    
                </div>
                <div style="clear:both"></div>
            </div>

            <div class="order-content">
                <div class="order-top">
                    <span class="order-code">订单号：ML18005211</span>
                    <span class="order-status">已取消</span>
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
                <div class="action">
                    <span>合计：￥1</span>
                    <div class="order-action" style="float:right;">
                        <van-button type="default" size='small'>再次购买</van-button>
                    </div>
                    
                </div>
                <div style="clear:both"></div>
            </div>
            <div class="bottom"></div>
            </van-tab>
            <van-tab :title="'待付款'">
            内容 11
            </van-tab>
            <van-tab :title="'待发货'">
            内容 11
            </van-tab>
            <van-tab :title="'待收货'">
            内容 11
            </van-tab>
            <van-tab :title="'待评价'">
            内容 11
            </van-tab>
        </van-tabs>
    </div>
    
</template>
<script>
export default {
    data() {
    return {
        type_item:['所有','待付款','待发货','待收货','待评价'],
      active: 0
    };
  }
}
</script>
<style>
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
.order-top .order-status{
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