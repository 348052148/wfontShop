
<template>
    <div>
        <van-tabbar @change="tabSelect" v-model="active">
            <van-tabbar-item icon="home">首页</van-tabbar-item>
            <van-tabbar-item icon="more-o" >分类</van-tabbar-item>
            <van-tabbar-item icon="cart" info="5">购物车</van-tabbar-item>
            <van-tabbar-item icon="contact" info="20">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data:function(){
            return {
                active:0,
                urlIndex: [
                    '/','/cat','/cart','/user'
                ]
            };
        },
        created(){
          let i = this.urlIndex.indexOf(this.$route.path);
          console.log(i);
          this.active = i;

        },
        methods:{
            tabSelect(){
                this.$router.push({path:this.urlIndex[this.active]});
                //router.push({ name: 'user', params: { userId: 123 }})

            }
        }
    }

</script>

<style>

</style>