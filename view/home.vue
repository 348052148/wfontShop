
<template>
    <div class="home">
        <div>
            <van-search placeholder="请输入商品名称" v-model="search" />
        </div>
        <div>
            <van-swipe :autoplay="3000">
                <van-swipe-item>
                    <img style="width: 100%;height: 120px;" src="http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png">
                </van-swipe-item>
                <van-swipe-item>
                    <img style="width: 100%;height: 120px;"  src="http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png">
                </van-swipe-item>
                <van-swipe-item>
                    <img style="width: 100%;height: 120px;"  src="http://img.zcool.cn/community/019f4e57207bc432f875a3990cbb6b.PNG@1280w_1l_2o_100sh.png">
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="homeNav">
            <van-row>
                <van-col span="6">
                    <van-icon name="hot-sale" />
                    粮油调味</van-col>
                <van-col span="6">
                    <van-icon name="new-arrival" />
                    烟酒饮料</van-col>
                <van-col span="6">
                    <van-icon name="cash-on-deliver" />
                    乳品冲调</van-col>
                <van-col span="6">
                    <van-icon name="shop-collect" />
                    休闲零食</van-col>
            </van-row>
        </div>

        <div>
            <van-notice-bar mode="closeable">
                新开业一家店铺
            </van-notice-bar>
        </div>
        <div class="section">
            <div class="mainTitle">限时特价</div>
            <div class="rongqi">
                <van-row>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                </van-row>
            </div>
        </div>


        <div class="section">
            <div class="mainTitle">第二件半价</div>
            <div class="rongqi">
                <van-row>
                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">统一鲜橙多</span>
                        <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>

                    <van-col span="6">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                            <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                            <span class="title">统一鲜橙多</span>
                            <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>
                </van-row>
            </div>
        </div>

        <div class="section">
            <div class="mainTitle">新品</div>
            <div class="rongqi">
                <van-row>
                <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad"
                        :offset="10"
                        loading-text="正在努力中"
                >
                    <van-col  v-for="item in list" :key="item"  span="8">
                        <router-link :to="{ path: '/goods', query: { sku: '1' }}">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">统一鲜橙多</span>
                        <span class="amount">￥ 2.5</span>
                        </router-link>
                    </van-col>
                </van-list>
                </van-row>
            </div>
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
        name: 'home',
        data:function(){
          return {
              search:'',
              list: [],
              loading: false,
              finished: false
          };
        },
        methods: {
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }

</script>

<style>
    .home{
        /*overflow: auto;*/
        /*display: inline-block;*/
        /*width: 100%;*/
        /*margin-bottom: 80px;*/
    }
    .homeNav{
        background: #fff;
    }
    .homeNav .van-col{
        height: 80px;
        text-align: center;
        font-size: 12px;
    }
    .homeNav .van-col .van-icon {
        margin-top: 20px;
        display: inline-block;
        width: 100%;
        font-size: 20px;
        text-align: center;
    }
    .home .DSS{
        display:inline-block;
        margin-top: 3px;
    }
    .section{
        font-size: 12px;
        text-align: center;
        background: #fff;
        padding-bottom: 10px;
    }
    .section .rongqi{
        width: 100%;
        margin-top: 3px;
    }
    .section .van-cell{
        border-bottom: 1px solid #eee;
    }
    .section .mainTitle{

        color: crimson;
        text-align: center;
        width: 100%;
        display: inline-block;
        border-bottom: aliceblue 1px solid;
        line-height: 30px;
    }

    .section .rongqi{
        margin-top: 10px;
    }
    .section .van-col{
        text-align: center;
        display: inline-block;
        margin-bottom: 5px;

    }
    .section .van-col img{
        width: 80%;
        display: inline-block;
    }
    .section .van-col .title {
        width: 100%;
        display: inline-block;
        text-align: center;
        overflow:hidden;
        font-weight: normal;
        text-overflow:ellipsis;
    }
    .section  .van-col .amount{
        width: 100%;
        display: inline-block;
        color: crimson;
        text-align: center;
    }
</style>