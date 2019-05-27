<template>
    <div>
        <h1>大表选车</h1>
        <button v-for="i in 100" :key="i" @click="ShowCarpicLayer(1000000 + i)">这辆车的id{{1000000 + i}}</button>
    </div>
</template>

<script>
    export default {
        methods:{
            ShowCarpicLayer(id){
                this.$bus.emit('ShowCarpicLayer',{id: id})               
            }
        }
    }
</script>

<style scoped>

</style>