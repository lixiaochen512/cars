<template>
    <div class="grid" v-if="info.id">
        <!-- <p><img :src="`${url}/images/carimages_small/${info.id}/view/${info.avatar}`"></p> -->
        <p><img :src="`http://127.0.0.1:3000/images/carimages/carimages/${info.id}/view/${info.avatar}`"></p>
        <p>{{info.brand}} {{info.series}}</p>
        <p>
            {{info.price}}万元  {{info.km | wan}}万公里
            {{info.color}}色  {{info.engine}}
        </p>
        <p>
            购买时间：{{new Date(info.buydate).getFullYear()}}年{{new Date(info.buydate).getMonth()}}月
        </p>
        <p><Button @click="showPic">点击查看本车图集</Button></p>
    </div>
</template>

<script>
import moment from "moment";
    export default {
        props:['info'],
        data(){
            return {
                url: process.env.VUE_APP_URL
            }
        },
        methods:{
            showPic(){
                this.$bus.emit('ShowCarpicLayer',{id:this.info.id})
            }
        }
    }
</script>

<style scoped >
    .grid {
        border: 1px solid #eee;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px; 
    }
    p {
        font-size: 14px;
        line-height: 26px;
     }
    img {
        width: 210px;
        border-radius: 5px;
    }
</style>