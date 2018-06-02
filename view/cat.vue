<template>
    <div class="cat">
        <div>
            <van-search placeholder="请输入商品名称" v-model="search" />
        </div>
        <div class="category">
            <div class="leftNav">
                <ul>
                    <li  v-for="(item, index) in items" @click="onItemClick(index)" :class="active(index)">{{item.text}}</li>
                </ul>
            </div>

            <div class="rightContent">
                <!--<div class="subTitle">白酒</div>-->
                <van-cell title="白酒" value="更多" is-link />
                <van-row>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">瓶装白酒</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">精装白酒</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">保健酒</span>
                    </van-col>
                </van-row>


                <van-cell title="饮料" value="更多" is-link />
                <van-row>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">即饮饮料</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">功能咖啡</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">茶饮料</span>
                    </van-col>
                </van-row>
                <van-row>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">运动饮料</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">碳酸饮料</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">饮用水</span>
                    </van-col>
                </van-row>


                <van-cell title="啤酒" value="更多" is-link />
                <van-row>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">瓶装白酒</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">精装白酒</span>
                    </van-col>
                    <van-col span="8">
                        <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                        <span class="title">保健酒</span>
                    </van-col>
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
        data() {
            return {
                search:'',
                items: [
                    {
                        text: '烟酒饮料',

                    },
                    {
                        text:'洗护用品',
                    },
                    {
                        text:'休闲零食'
                    },
                    {
                        text:'粮油调味'
                    },
                    {
                        text:'生活服务'
                    },
                    {
                        text:'乳品冲调'
                    },{
                        text:'冷冻食品'
                    },
                    {
                        text:'日用百货'
                    }
                ],
                index:0,
                // 左侧高亮元素的index
                mainActiveIndex: 0,
                // 被选中元素的id
                activeId: 1001
            };
        },
        methods: {
            onItemClick(index) {
                this.index = index;
            },
            active(index){
                if(this.index == index)
                    return 'active';

                return '';
            }
        }
    }

</script>

<style>
    .cat {
        height: 100%;
        font-weight: normal;
    }
    .category {
        border-top: aliceblue solid 1px;
        display: inline-block;
        width: 100%;
    }
    .category .leftNav{
        width: 25%;
        font-size: 12px;
        display: inline-block;

    }
    .category .leftNav ul{

    }
    .category .leftNav ul li{
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 30px;
        /*background: #eeeeee;*/
    }

    .category .rightContent{
        background: #fff;
        display: inline-block;
        width: 75%;
        font-size: 12px;
        float: right;
    }

    .category .rightContent .van-col{
        text-align: center;
        margin-bottom: 10px;
        font-size: 12px;
    }

    .category .rightContent .van-col img{
        width: 80%;
        display: inline-block;
    }
    .category .rightContent .van-col .title {
        width: 100%;
        display: inline-block;
        text-align: center;
        overflow:hidden;
        font-weight: normal;
        text-overflow:ellipsis;
    }

    .active{
        color: crimson;
        background: #fff;
    }
</style>