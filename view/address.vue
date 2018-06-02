<template>

    <div class="address">
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                :fixed="true"
        />
        <div class="et">
            <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
            />
        </div>
    </div>
</template>

<script>
    import areaList from './../src/areaList.js';
    export default {
        data() {
            return {
                areaList,
                searchResult: []
            }
        },

        methods: {
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    }

</script>

<style>
    .address {
        display: inline-block;
        overflow: auto;
    }
    .address .et{

    }
</style>