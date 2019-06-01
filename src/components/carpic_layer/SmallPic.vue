<template>
    <div class="wrap" v-if="id" @mouseleave="leaveHandle">
        <div>
            <div class="unit" :style="{left:-230 * nowPage +'px'}">
                <ul v-for="i in totalPage" :key="i">
                    <li v-for="j in 6" :key="j" 
                    v-if='getThePic(i, j)'
                    :class="{cur : (i-1) * 6 + (j-1) == nowIdx}"
                    @click="changeNowIdx((i-1) * 6 + (j-1))"
                    >
                        <!-- <LoadingGifImage :src="`${url}/images/carimages_small/${id}/${nowAlbum}/${getThePic(i, j)}`" w="105" h="70" /> -->
                        <LoadingGifImage :src="`http://127.0.0.1:3000/images/carimages/carimages/${id}/${nowAlbum}/${getThePic(i, j)}`" w="105" h="70" />
                    </li>
                    
                </ul>
            </div>
            
            <ol class="pages" v-if="totalPage != 1">
                <li v-for="i in totalPage" :key="i" :class="{cur:nowPage == (i-1)}"
                :style="{width: getW +'px'}"
                @mouseenter="changeNowPage(i-1)"
                >
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                url:process.env.VUE_APP_URL,
                nowPage:0
            }
        },
        methods:{
            getThePic(i,j){
                return this.store.result.images[this.nowAlbum][(i-1) * 6 + (j-1)]
            },
            changeNowIdx(nowIdx){
                this.$store.commit('carpicStore/changeNowIdx',{nowIdx})
            },
            changeNowPage(page){
                this.nowPage = page;
            },
            leaveHandle(){
                this.nowPage = parseInt(this.nowIdx / 6)
            }
        },
         computed:{
             getW(){
                 return (220 - 5 * (this.totalPage - 1)) / this.totalPage
             },
            store(){
               return this.$store.state.carpicStore 
            },
            nowIdx(){
                return this.store.nowIdx
            },
            id(){
                return this.store.id
            },
            nowAlbum(){
                return this.store.nowAlbum
            },
            //图片总张数
            totalImagesNumber(){
                // console.log(this.store.result.images[this.nowAlbum].length)
                return this.store.result.images[this.nowAlbum].length
            },
            //图片页面数量
            totalPage(){
                // console.log(this.totalImagesNumber / 6)
                return Math.ceil(this.totalImagesNumber / 6)
            }
        },
        
        // 监听
        watch: {
            // 当store中的nowIdx改变时，说明切换图片，重新计算一个页码
            nowIdx(){
                this.nowPage = parseInt(this.nowIdx / 6)
            },
            // 当换车了，重新计算一个页码
            id(){
                this.nowPage = parseInt(this.nowIdx / 6)
            }
        }
        
    }
</script>

<style scoped>
    .wrap{
        padding: 10px;
        margin-top: -20px;
    }
    .unit{
        width: 3000px;
        position: relative;
        transition: left 0.4s;
    }
    ul{
        float: left;
        width: 250px;
        height: 220px;
    }
    ul li{
        float: left;
        width: 100px;
        height: 70px;
        margin:0 10px 5px 0; 
        overflow:hidden;
        position:relative;
        cursor:pointer;
    }
    ul li:before{
        content:"";
        position:absolute; 
        z-Index:9999; 
        transition:all 0.6s;
        width:100%; 
        height:100%; 
        background: rgba(0,0,0,.6);
    }
    ul li.cur:before{
        opacity: 0;
    }
    .pages{
        overflow:hidden; 
        clear:both;
        padding-top: 10px;
    }
    .pages li {
        list-style:none;
        float:left; 
        /* width:50px;  */
        height:22px; 
        background: #ccc; 
        margin-right:5px;
        }
    .pages li:last-child{
        margin-right:0;
    }
    .pages .cur{
        background: gold;
    }
    
</style>