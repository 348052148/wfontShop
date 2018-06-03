<template>
    <div class="addressLst">
        <van-nav-bar
                title="标题"
                left-text="返回"
                left-arrow
                :fixed="true"
                @click-left="onClickLeft"
        />
        <div class="list">
            <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    @add="onAdd"
                    @edit="onEdit"
                    @select="onSelect"
            />
        </div>

    </div>
</template>

<script>
    import Req from './../src/req.js';
    export default {
        data() {
            return {
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号'
                    }
                ]
            }
        },
        created(){
            Req.request('/addressList',{},(response) => {
                this.list = response.data.list;
                this.chosenAddressId = response.data.default;
            });
        },

        methods: {
            onAdd() {
                this.$router.push({path:'/address-add',query:{}});
            },
            onEdit(item, index) {
                this.$router.push({path:'/address-edit',query:{id:item.id}});
            },
            onSelect(item, index){
                Req.request('/setDefault',{id:item.id},(response) => {
                    
                });
            },
            onClickLeft(){
                this.$router.back();
            }
        }
    }
</script>

<style>
    .addressLst {
        display: inline-block;
        overflow: auto;
    }
    .addressLst .list{
        margin-top: 50px;
    }
</style>