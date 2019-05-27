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

        }
    }
</script>

<style scoped>
    img{
        width: 750px;
    }
    .next{
        background-image: url("images")
    }
</style>