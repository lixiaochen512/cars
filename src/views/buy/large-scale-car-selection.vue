<template>
    <div>
        <h1>大表选车</h1>
        <FilterBox />
        <Row>
            <Col span="18">
                <h3>根据当前查询条件，共找到{{total}}辆车符合条件</h3>
            </Col>
        </Row>
        
        <BigTable />
    </div>
</template>

<script>
    import BigTable from './components/BigTable.vue'
    import FilterBox from './components/FilterBox.vue'
    export default {
        components:{
            BigTable,
            FilterBox
        },
         created(){
            this.$store.dispatch('largeTableStore/init')
        },
        computed: {
            total(){
                return this.$store.state.largeTableStore.total
            }
        }
    }
</script>

<style scoped>

</style>