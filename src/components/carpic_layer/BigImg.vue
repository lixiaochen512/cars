<template>
    <div v-if="id">
        <!-- <img :src="`${url}/images/carimages/${id}/${nowAlbum}/${pic}`"/> -->
        <LoadingGifImage :src="`${url}/images/carimages/${id}/${nowAlbum}/${pic}`" w='750px' h='500px'/>
        <div class="next" @click="goNext()"></div>
        <div class="prev" @click="goPrev()"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                url:process.env.VUE_APP_URL
            }
        },
        computed:{
            store(){
               return this.$store.state.carpicStore 
            },
            nowIdx(){
                return this.store.nowIdx
            },
            id(){
                // console.log(this.store.id)
                return this.store.id
            },
            nowAlbum(){
                // console.log(this.store.nowAlbum)
                return this.store.nowAlbum
            },
            pic(){
                return this.store.result.images[this.nowAlbum][this.nowIdx]
            }
        },
        methods:{
            goNext(){
                this.$store.dispatch('carpicStore/goNext')
            },
            goPrev(){
                this.$store.dispatch('carpicStore/goPrev')

            }
        }
    }
</script>

<style scoped>
    img{
        width: 750px;
    }
    .next{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 50%;
        height: 100%;
        cursor: url("/images/picture-cursor-right.cur") auto;
    }
    .prev{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 50%;
        height: 100%;
        cursor: url("/public/images/picture-cursor-left.cur") auto;
    }
</style>