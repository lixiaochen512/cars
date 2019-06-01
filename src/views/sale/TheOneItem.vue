<template>
    <div class="wrap_item">
        <!-- 预览图 -->
        <img :src="imgUrl" v-if="imgUrl">

        <Progress :percent="percent" status="active" />

    </div>
</template>

<script>
    export default {
        props:['file'],
        data(){
            return {
                imgUrl: '',
                percent: 0
            }
        },
        created(){
            // 创建文件读取器
             const fileReader = new FileReader();
            //获取用户选择的文件，转换URL地址为base64编码
            fileReader.readAsDataURL(this.file)
            // console.log(fileReader)
            // 转换完毕（此时还没上传）
            fileReader.onload = (e)=>{
                // console.log(e)
                this.imgUrl = e.target.result;  //将base64图片存储到本地渲染
                this.upload()
            }
        },
        methods:{
            upload(){
                // 创建虚拟表单
                const form = new FormData()
                // 将图片控制中的图片追加到虚拟表单中，并加一个name属性为file
                form.append('file',this.file)
                // console.log(form)
                const xhr = new XMLHttpRequest()

                xhr.upload.onprogress = (e)=>{
                    this.percent = e.loaded / e.total * 100
                }

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        // console.log(xhr)
                    }
                }
                // xhr.open('post','http://127.0.0.1:3000/upload',true)
                xhr.open('post','/api/upload',true)

                xhr.send(form)                
            }
        }
    }
</script>

<style scoped>
    .wrap_item {
        float: left;
        width: 250px;
        height: 300px;
        border: 1px solid #000;
        margin:10px;
    }
    .wrap_item img{
        max-width: 100%;
    }
</style>