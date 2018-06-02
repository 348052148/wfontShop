
<template>
    <div>
        
        <router-view/>
        
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