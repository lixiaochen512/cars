<template>
    <div class="wrap" :style="{width:w +'px', height:h + 'px'}">
        <!-- 真实显示的图片 -->
        <img :src="src" :width="w" :height="h" ref="pic" style="display:none">
        <!-- 预加载图片 -->
        <span ref="lodinggif"></span>
    </div>
</template>

<script>
    export default {
        props: ['src', 'w', 'h'],
        // 当数据发生变化的生命周期（当切换图片时）
        beforeUpdate(){
            this.$refs.lodinggif.style.display = 'block'; 
            this.init()
        },
        mounted() {
            this.init()
        },
        methods: {
            init(){
                const img = new Image();
                // 让图片对象的src设置为传入的props的src
                img.src = this.src
                // 图片加载完毕显示图片，隐藏loading图
                img.onload = ()=>{
                    this.$refs.pic.style.display = 'block';  //显示真实图
                    this.$refs.lodinggif.style.display = 'none'; //隐藏加载图
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