<template>
    <div class="infowrap">
        <h3>
            品牌：{{result.brand}}
            车系：{{result.series}}
        </h3>
        <h4>
            价格：{{result.price}}  {{result.km}}万公里
        </h4>

    </div>
</template>

<script>
    export default {
       computed:{
            result(){
               return this.$store.state.carpicStore.result
            }
        } 
    }
</script>

<style scoped>
    .infowrap{
        padding:10px;
        
    }
    .infowrap h3 { font-size: 16px; color:#333;}
    .infowrap h4{ font-size: 14px; }
</style>