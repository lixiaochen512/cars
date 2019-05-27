<template>
    <div class="chooseAlbum" v-if="store.id">
        <ul>
            <li :class="{cur:nowAlbum == 'view'}" @click="changeNowAlbum('view')">
                外观<br>{{images.view.length}}
            </li>
            <li :class="{cur:nowAlbum == 'inner'}" @click="changeNowAlbum('inner')">
                内饰<br>{{images.inner.length}}
            </li>
            <li :class="{cur:nowAlbum == 'engine'}" @click="changeNowAlbum('engine')">
                引擎<br>{{images.engine.length}}
            </li>
            <li :class="{cur:nowAlbum == 'more'}" @click="changeNowAlbum('more')">
                更多<br>{{images.more.length}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
         computed:{
            store(){
               return this.$store.state.carpicStore 
            },
            nowAlbum(){
                // console.log(this.store.nowAlbum)
                return this.store.nowAlbum
            },
            images(){
                return this.store.result.images
            }
        },
        methods:{
            changeNowAlbum(str){
                this.$store.dispatch('carpicStore/changeNowAlbum',{nowAlbum:str})
            }
        }
    }
</script>

<style scoped>
    .chooseAlbum {
        padding:10px;
    }
    ul {
        width: 250px;
        height: 150px;
        list-style:none;
    }
    li {
        float: left;
        width: 105px;
        height: 50px;
        margin :0 10px 10px 0 ;
        padding-top: 4px;  
        font-size: 15px;
        text-align: center;
        line-height: 20px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .cur {
        background: gold;
        color: white;
        text-shadow: 1px 1px 1px #000;
    }
           
</style>