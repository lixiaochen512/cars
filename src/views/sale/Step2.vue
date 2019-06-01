<template>
    <div>
        <!-- 预览图 -->
        <img :src="imgUrl" v-if="imgUrl">

        <input type="file" ref="fileCtrl" @change="changeHandle" multiple>
        <Button type="primary" @click="upload">点击上传</Button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgUrl: ''
            }
        },
        methods:{
            changeHandle(){
                // 创建文件读取器
                const fileReader = new FileReader();
                //获取用户选择的文件，转换URL地址为base64编码
                fileReader.readAsDataURL(this.$refs.fileCtrl.files[0])
                console.log(fileReader)
                // 转换完毕（此时还没上传）
                fileReader.onload = (e)=>{
                    this.imgUrl = e.target.result;  //将base64图片存储到本地渲染
                }

            },
            upload(){
                const form = new FormData()
                form.append('file',this.$refs.fileCtrl.files[0])
                // console.log(form)
                const xhr = new XMLHttpRequest()
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        // console.log(xhr)
                    }
                }
                xhr.open('post','http://127.0.0.1:3000/upload',true)
                xhr.send(form)                
            }
        }
    }
</script>

<style scoped>

</style>