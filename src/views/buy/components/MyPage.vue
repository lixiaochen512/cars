<template>
    <div>
        <Page :total="total" show-elevator show-sizer show-total
        :current=page
        :page-size=pagesize
        @on-change="changePage"
        @on-page-size-change="changePageSize"
        />
        
    </div>
</template>

<script>
    export default {
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
            changePage(page){
                console.log(page)
                this.$store.dispatch('largeTableStore/changePage',{page})
            },
             changePageSize(pagesize){
                this.$store.dispatch('largeTableStore/changePageSize',{pagesize})
            }
        }
    }
</script>

<style scoped>

</style>