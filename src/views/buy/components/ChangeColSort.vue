<template>
    <div>
        <h3>当前列顺序（您可以自由拖拽调整顺序哦）：</h3>
        <draggable v-model="arr1" :options="options" tag="ul">
            <li v-for="item in arr1" :key="item">{{getVbyK(item)}}</li>
        </draggable>

        <h3>可选的状态（您可以自由的添加需要显示的列）↑：</h3>
        <draggable v-model="arr2" :options="options" tag="ul">
            <li v-for="item in arr2" :key="item">{{getVbyK(item)}}</li>
        </draggable>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import dictionary from '../utils/dictionary.js'
    export default {
        created(){
            // 读取本地存储
            let storageArr = JSON.parse(localStorage.getItem('colSort'))

            // 根据本地存储的键名的顺序，生成新数组arr1
            for(let i = 0;i < storageArr.length;i++){
                this.arr1.push(storageArr[i])
            }

            // 根据本地存储的键名的顺序，生成新数组arr2
            for(let k in dictionary){
                if(!storageArr.includes(k)){
                    this.arr2.push(k)
                }
            }
        },
        data(){
            return {
                arr1: [],
                arr2: [],
                options: {
                    group: 'haha',
                    animation: 200
                }
            }
        },
        methods: {
            // 根据键名格式化中文
            getVbyK(k){
                for(let i in dictionary){
                    if(k === i){
                        return dictionary[i]
                    }
                }
            }
        },
        components: {
            draggable,
        },
    }
</script>

<style scoped>
ul{
    list-style: none;
    overflow: hidden;
    min-height: 50px;
    border-bottom: 1px solid #ccc;
    margin: 10px;
    
}
ul li{
    float: left;
    padding: 5px 15px;
    border: 1px solid #ccc;
    height: 30px;
    text-align: center;
    margin: 0 4px 4px 0;
    border-radius: 5px;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    }
</style>