<template>
    <div class="mask" @click="hideCarpicLayer">
        <!-- 阻止事件冒泡，空事件表示什么都不做 -->
        <div class="inner" @click.stop="">
            <a href="###" class="closeBtn" @click="hideCarpicLayer"> × </a>
            <div class="bigImgBox">
               <BigImg />
            </div>
            <div class="rightPart">
                <CarInfo />
                <ChooseAlbum />
                <SmallPic />
               <!-- {{$store.state.carpicStore.result}} -->
            </div>
        </div>
    </div>
</template>

<script>
    import BigImg from "./BigImg.vue"
    import CarInfo from "./CarInfo.vue"
    import ChooseAlbum from "./ChooseAlbum.vue"
    import SmallPic from "./SmallPic.vue"

    export default {
        props: ['CarpicLayerId'],
        components: {
            BigImg,
            CarInfo,
            ChooseAlbum,
            SmallPic
        },
        // 已经就绪，触发异步命令，根据id发Aajx请求车辆图片数据
        created(){
            this.$store.dispatch('carpicStore/init', {id: this.CarpicLayerId})
        },
        methods: {
            hideCarpicLayer(){
                this.$bus.emit('HideCarpicLayer')
            }
        }
    }
</script>

<style scoped>
    .mask{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }
    .inner{
        width: 1000px;
        height: 500px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -500px;
        margin-top: -250px;
    }
    .closeBtn {
        position: absolute;
        width: 36px;
        height: 36px;
        background-color: #ffa500;
        right: -18px;
        top: -18px;
        border-radius: 50%;
        text-align: center;
        line-height: 34px;
        text-decoration: none;
        font-size: 38px;
        color: #fff;
        border: 2px solid #fff;
        font-family: "times new roman";
    }
    .bigImgBox{
        position: relative;
        float: left;
        width: 750px;
    }
    img{
        width: 750px;
    }
    .rightPart{
        width: 250px;
        float: right;
        overflow: hidden;
    }
</style>