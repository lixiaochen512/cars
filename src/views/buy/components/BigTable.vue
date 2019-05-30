<template>
    <div @click="clickHandle">
    <Table border :columns="columns" :data="results" @on-sort-change="changeSort"></Table>

    <Page :total="total" show-elevator show-sizer show-total
    :current=page
    :page-size=pagesize
    @on-change="changePage"
    @on-page-size-change="changePageSize"
    />
    </div>
</template>
<script>
    import columns from "../utils/columns.js"
    export default {       
        data () {
            return {
                columns:columns(this.$store.state.largeTableStore)
            }
        },
        computed:{
            results(){
                return this.$store.state.largeTableStore.results;
            },
            page(){
                return this.$store.state.largeTableStore.page;
            },
            pagesize(){
                return this.$store.state.largeTableStore.pagesize;
            },
            total(){
                return this.$store.state.largeTableStore.total;
            }
        },
        methods:{
            clickHandle(e){
                if(e.target.nodeName.toLowerCase() === 'img'){
                    if (e.target.parentNode.parentNode.hasAttribute('data-id')) {
                        var id = e.target.parentNode.parentNode.getAttribute('data-id')
                        this.$bus.emit('ShowCarpicLayer',{id})
                    }
                }
            },
            changePage(page){
                console.log(page)
                this.$store.dispatch('largeTableStore/changePage',{page})
            },
            changeSort({key,order}){
                var sort = {
                    sortby : key,
                    sortdirection : order == 'asc'? 1 : -1
                }
                this.$store.dispatch('largeTableStore/changeSort',{sort})
                
            },
            changePageSize(pagesize){
                this.$store.dispatch('largeTableStore/changePageSize',{pagesize})

            }
        }
    }
</script>

<style scoped>

</style>