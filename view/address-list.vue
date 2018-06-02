<template>
    <div class="addressLst">
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                :fixed="true"
        />
        <div class="list">
            <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    @add="onAdd"
                    @edit="onEdit"
            />
        </div>

    </div>
</template>

<script>
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

        methods: {
            onAdd() {
                Toast('新增收货地址');
            },
            onEdit(item, index) {
                Toast('编辑收货地址:' + index);
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