<template>
        <div>
            <div class="choose-title" flex>
                <div class="item">综合</div>
                <div class="item">价格</div>
                <div class="item">销量</div>
            </div>
            <div class="product-list">
                <div class="list">
                    <div class="left">
                        <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div class="right">
                         <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div style="clear:both;"></div>
                </div>
                <div class="list">
                    <div class="left">
                        <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div class="right">
                         <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div style="clear:both;"></div>
                </div>
                <div class="list">
                    <div class="left">
                        <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div class="right">
                         <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div style="clear:both;"></div>
                </div>
                <div class="list">
                    <div class="left">
                        <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div class="right">
                         <img class="pic-url" src="https://img14.360buyimg.com/n2/jfs/t17815/197/927690859/701843/49879888/5ab2ff90N30de3950.jpg!q80.webp"/>
                        <span class="pic-title">马来西亚原装进口 过山车(GOTOGO)麦糯糯浓醇巧克力味蛋糕卷 480克（20克×24）</span>
                        <span class="pic-price">￥100</span>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
            <div class="bottom"></div>
        </div>
</template>

<script>
export default {
    
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
    margin-top: 60px;
}
.right,.left{
    width: 49%;
    height: auto;
    text-align: center;
    background: #fff;
    margin-bottom: 5px;
}
.right{
   
    float: right;
    
}
.left{
    float: left;
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
