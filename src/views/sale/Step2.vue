<template>
    <div class="wrap">
        <!-- 模拟上传表单按钮 -->
        <div class="BeautfulBtn" @click="BeautfulBtn">好看的按钮</div>
        <input hidden type="file" ref="fileCtrl" @change="changeHandle" multiple>

        <div class="uBox" ref="uBox">
            <Icon class="icon" size=52 type="ios-cloud-upload-outline" />
            <TheOneItem v-for="(file,index) in files" :key="index" :file="file"></TheOneItem>
        </div>
    </div>
</template>

<script>
    import TheOneItem from './TheOneItem.vue'
    export default {
        components:{
            TheOneItem
        },
        data(){
            return {
                files:[]
            }
        },
        mounted(){
            document.addEventListener('drop', function (e) {
                e.preventDefault()
            }, true)

            document.addEventListener('dragenter', function (e) {
                e.preventDefault()
            }, true)

            document.addEventListener('dragleave', function (e) {
                e.preventDefault()
            }, true)
            
            document.addEventListener('dragover', function (e) {
                e.preventDefault()
            }, true)

            // 给uBox添加拖拽监听
            this.$refs.uBox.addEventListener('drop', (e)=> {
                e.preventDefault()
                console.log(e)
                this.files = e.dataTransfer.files;  //拖拽上传得到的图片数组
            }, true)
            
        },
        methods:{
            BeautfulBtn(){
                // var clickEvent = document.createEvent('MouseEvent');
                var clickEvent=new MouseEvent('click');  //模拟鼠标事件
                // 2.初始化一个click事件
                // clickEvent.initMouseEvent('click',false,false,window,0,0,0,0,0,false,false,false,false,0,null); 
                this.$refs.fileCtrl.dispatchEvent(clickEvent)
            },
            changeHandle(){
                this.files = this.$refs.fileCtrl.files
                console.log(this.files)
            }

        }
    }
    
</script>

<style scoped>
    .uBox {
        position: relative;
        min-height: 200px;
        overflow: hidden;
        border: 1px dotted blue;
        margin:20px;
    }
    .icon {
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
    .wrap {
        overflow: hidden;
    }
    .BeautfulBtn {
        width: 150px;
        height: 50px;
        background: skyblue;
        border-radius: 5px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        font-size:16px;
    }
    .BeautfulBtn:hover {
        background: gold;
    }
</style>