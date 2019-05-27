<template>
    <div class="wrap" :style="{width:w +'px', height:h + 'px'}">
        <img :src="src" :width="w" :height="h" ref="pic" style="display:none">
        <span ref="lodinggif"></span>

    </div>
</template>

<script>
    export default {
        props:['src','w','h'],
        beforeCreate(){
            this.$refs.lodinggif.style.display = "block";
            this.init()
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                const img = new Image();
                img.src = this.src;
                img.onload = ()=>{
                    this.$refs.pic.style.display = "block";
                    this.$refs.lodinggif.style.display = "none";
                }
            }
        }
    }
</script>

<style scoped>
    .wrap {
        position: relative;
    }
    span{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
        background: url(/images/loading.svg) no-repeat;
        margin-left: -40px;
        margin-top: -40px;
    }
</style>