<template>
    <div>
        <!-- 循环显示5行3列 -->
        <Row v-for="i in 5" :key="i" :gutter="10">
            <Col v-for="j in 3" span="8">
            
                <OneGrid :info="results[(i-1) * 3 + (j-1)]"></OneGrid>
            </Col>
        </Row>
    </div>
</template>

<script>
    import OneGrid from "./OneGrid.vue"
    export default {
        created(){
            this.$store.dispatch('largeTableStore/changePageSize' , {pagesize: 15})
        },
        computed: {
            results(){
                return this.$store.state.largeTableStore.results
            }
        },
        components: {
            OneGrid
        }
    }
</script>

<style scoped>

</style>