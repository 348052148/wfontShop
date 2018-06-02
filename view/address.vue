<template>

    <div class="address">
        <van-nav-bar
                title="标题"
                left-text="返回"
                left-arrow
                :fixed="true"
                @click-left="onClickLeft"
        />
        <div class="et">
            <van-address-edit
                    :area-list="areaList"
                    show-postal
                    show-delete
                    show-set-default
                    show-search-result
                    :search-result="searchResult"
                    :address-info="addressInfo"
                    @save="onSave"
                    @delete="onDelete"
                    @change-detail="onChangeDetail"
                    @select-search="selectSearch"
                    @change-area="changeArea"
            />
        </div>
    </div>
</template>

<script>
    /**
     * id 	每条地址的唯一标识 	String | Number
     name 	收货人姓名 	String
     tel 	收货人手机号 	String
     province 	省份 	String
     city 	城市 	String
     county 	区县 	String
     address_detail 	详细地址 	String
     area_code 	地区编码，通过省市区选择获取 	String
     postal_code 	邮政编码 	String
     is_default 	是否为默认地址 	Boolean
     */
    import areaList from './../src/areaList.js';
    export default {
        data() {
            return {
                areaList,
                searchResult: [],
                addressInfo:{
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    province:'',
                    city:'',
                    county:'',
                    address_detail:'浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    area_code:'',
                    postal_code:'',
                    is_default:false
                }
            }
        },

        methods: {
            onSave(content) {
               console.log(content);
            },
            onDelete(content) {

            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [
                        {
                            name: '黄龙万科中心',
                            address: '杭州市西湖区'
                        },
                        {
                            name: '黄龙万科中心123',
                            address: '123'
                        }
                    ];
                }
            },
            changeArea(value){
                console.log(JSON.stringify(value));
            },
            selectSearch(value){
                this.addressInfo.address_detail = value.name+value.address;
            },
            onClickLeft(){
                this.$router.back();
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