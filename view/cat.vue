<template>
    <div class="cat">
        <div>
            <van-search placeholder="请输入商品名称" v-model="search" @search="onSearch" />
        </div>
        <div class="category">
            <div class="leftNav">
                <ul>
                    <li  v-for="(item, index) in items" @click="onItemClick(index)" :class="active(index)">{{item.title}}</li>
                </ul>
            </div>

            <div class="rightContent">
                <!--<div class="subTitle">白酒</div>-->
                <template v-for="category in currentData.list">
                    <van-cell  :title="category.title" value="更多" is-link />
                    <van-row>

                        <van-col v-for="cate in category.list" span="8">
                            <router-link :to="{ path: '/list', query: { categoryId: 1 }}">
                                <img src="http://weixin.ismbao.com/tb/80x80/upload/201805/19/1526697380869576.png"/>
                                <span class="title">{{cate.title}}</span>
                            </router-link>
                        </van-col>

                    </van-row>
                </template>


            </div>
        </div>


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
        data() {
            return {
                search:'',
                items: [
                    {
                        text: '烟酒饮料',

                        list:[
                            {
                                title:'白酒',
                                pic:'',
                                list:[
                                    {title:'瓶装白酒',pic:''},
                                    {title:'精装白酒',pic:''},
                                    {title:'保健酒',pic:''}
                                ]
                            },
                            {
                                title:'饮料',
                                pic:'',
                                list:[
                                    {title:'即饮饮料',pic:''},
                                    {title:'功能咖啡',pic:''},
                                    {title:'茶饮料',pic:''},
                                    {title:'运动饮料',pic:''},
                                    {title:'碳酸饮料',pic:''},
                                    {title:'茶饮料',pic:''},
                                ]
                            }
                        ]

                    },
                    {
                        text:'洗护用品',
                        list:[
                            {
                                title:'洗澡',
                                pic:'',
                                list:[
                                    {title:'瓶装白酒',pic:''},
                                    {title:'精装白酒',pic:''},
                                    {title:'保健酒',pic:''}
                                ]
                            },
                            {
                                title:'饮料',
                                pic:'',
                                list:[
                                    {title:'即饮饮料',pic:''},
                                    {title:'功能咖啡',pic:''},
                                    {title:'茶饮料',pic:''},
                                    {title:'运动饮料',pic:''},
                                    {title:'碳酸饮料',pic:''},
                                    {title:'茶饮料',pic:''},
                                ]
                            }
                        ]
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
                activeId: 1001,
                currentData:[]
            };
        },
        created(){
            Req.request('/cat',{},(response) => {
                this.items = response.data.cat;
                this.currentData = this.items[this.index];
            });
        },
        methods: {
            onItemClick(index) {
                this.index = index;
                this.currentData = this.items[this.index];
            },
            active(index){
                if(this.index == index)
                    return 'active';

                return '';
            },
            onSearch(){
                this.$router.push({path:'/list',query:{keyword:this.search}});
            }
        }
    }

</script>

<style>
    .cat {
        height: 100%;
        font-weight: normal;
        overflow: hidden;
    }
    .category {
        border-top: aliceblue solid 1px;
        display: inline-block;
        width: 100%;
        height: 550px;
    }
    .category .leftNav{
        width: 25%;
        font-size: 14px;
        display: inline-block;
        height: 100%;
        margin-bottom: 50px;
    }
    .category .leftNav ul{

    }
    .category .leftNav ul li{
        text-align: center;
        width: 100%;
        height: 45px;
        line-height: 45px;
        /*background: #eeeeee;*/
    }

    .category .rightContent{
        background: #fff;
        display: inline-block;
        width: 75%;
        font-size: 14px;
        float: right;
        overflow: auto;
        height: 100%;
    }

    .category .rightContent .van-col{
        text-align: center;
        margin-bottom: 10px;
        font-size: 14px;
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