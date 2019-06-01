<template>
    <div class="bigTable" ref="bigTable" @click="clickHandle">
        <!-- 模态框组件按钮 -->
        <Button class="btn" type="primary" icon="md-build" shape="circle"       
            @click="showChangeColModal">
        </Button>


        <Table :columns="columns" :data="results" @on-sort-change="changeSort"></Table>

        <!-- 模态框组件 -->
        <div v-if="isShowChangeColModal">
            <Modal :value="true" title="请您自定义表格的列" @on-ok="ok" @on-cancel="cancel">
                <ChangeColSort ref="col"></ChangeColSort>
            </Modal>
        </div>
    </div>
    
</template>
<script>
    import columns from "../utils/columns.js"
    import ChangeColSort from "../components/ChangeColSort"
    export default {
        created(){
            // 如果本地存储为空，设置本地存储，自定义存储一些key的顺序
            if(!localStorage.getItem('colSort')){
                localStorage.setItem('colSort', JSON.stringify(['id','avatar', 'brand','series','color', 'price', 'km', 'engine','buydate', 'license', 'exhaust', 'gearbox', 'fuel']))
            }
        },
        data () {
            return {
                columns: columns(this.$store.state.largeTableStore),
                isShowChangeColModal: false
            }
        },
        computed: {
            results(){
                return this.$store.state.largeTableStore.results
            },
            total(){
                return this.$store.state.largeTableStore.total
            }
        },
        methods: {
            ok(){
                // 获取组件中的数组（数组顺序是经过用户拖拽修改的）
                const arr = this.$refs.col.arr1;

                // 将最新的数组顺序写入到本地存储，替换原有的
                localStorage.setItem('colSort', JSON.stringify(arr))

                // 重新赋值改变列，影响视图更新
                this.columns = columns(this.$store.state.largeTableStore)
                // 隐藏模态框
                this.isShowChangeColModal = false;
            },
            cancel(){
                // 隐藏模态框
                this.isShowChangeColModal = false;
            },
            showChangeColModal(){
                // 显示模态框
                this.isShowChangeColModal = true;
            },
            clickHandle(e){
                // 如果点击的是图片
                if(e.target.nodeName.toLowerCase() == 'img'){
                    // 然后检查这个图片的父节点上有没有data-id属性
                    if(e.target.parentNode.parentNode.hasAttribute('data-id')){
                        var id = e.target.parentNode.parentNode.getAttribute('data-id')
                        // 根据id显示弹出层
                        this.$bus.emit('ShowCarpicLayer', {id})
                    }
                }
            },
            changeSort({key, order}){
                // 排序条件
                const sort = {
                    sortby: key,
                    sortdirection: order == 'asc' ? 1 : -1
                }
                this.$store.dispatch('largeTableStore/changeSort', {sort})
            }
        },
        components: {
            ChangeColSort
        }
    }
</script>
<style scoped>
    .btn{
        position: relative;
        top: -6px;
    }
</style>
