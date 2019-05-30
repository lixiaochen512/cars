<template>
    <div>
        <Row v-for="f in fs" :key="f.english">
            <Col span="4">{{f.chinese}}</Col>
            <Col span="20" >

                <div v-if="f.type == '复选框'">
                    <CheckboxGroup :value="getVbyK(f.english,f.type)" @on-change=changeFilters(f.english,$event,f.type)>
                        <Checkbox v-for="i in f.options" :key="i" :label="i"></Checkbox>
                    </CheckboxGroup>
                </div>

                <div v-if="f.type == '范围条'">
                    <Row>
                        <Col span="12">
                            <Slider range :min='f.min / f.rate' :max='f.max / f.rate' :value="getVbyK(f.english,f.type,f.min,f.max,f.rate)" @on-change=changeFilters(f.english,$event,f.type,f.rate)></Slider>
                        </Col>
                        <Col span="11" :offset =1>
                            <MyInputNumber  :min='f.min / f.rate' :max='f.max / f.rate' :value="getVbyK(f.english,f.type,f.min,f.max,f.rate)" @click="changeFilters(f.english,$event,f.type,f.rate)" />
                        </Col>
                    </Row>
                </div>

                <div v-if="f.type == '日期范围'">
                    <DatePicker type="daterange" placeholder="请输入时间" style="width: 200px" split-panels
                    :value="getVbyK(f.english,f.type)"
                    @on-change=changeFilters(f.english,$event,f.type)
                    ></DatePicker>
                </div> 
            </Col>
                <!-- {{getVbyK(f.english,f.type)}}  -->
        </Row>
    </div>
</template>

<script>
    import filterBox from "../utils/filterBox.js"
    import MyInputNumber from "./MyInputNumber.vue"
    import moment from "moment"
    export default {
        data(){
            return {
                fs:filterBox
            }
        },
        computed:{
            filters(){
                return this.$store.state.largeTableStore.filters;
            }
        },
        methods:{
            getVbyK(k,type,min,max,rate){
                for (let i = 0; i < this.filters.length; i++) {
                   if (this.filters[i].k == k) {
                       if (type === '复选框') {
                           return this.filters[i].v.split('v')
                       }else if(type === '范围条'){
                           return this.filters[i].v.split('to').map(item=>{return Math.round(Number(item)/rate)})
                       }else if(type === '日期范围'){
                          return this.filters[i].v.split('to').map(item=>new Date(Number(item)))

                       }
                   }
                }

                if (type === '复选框') {
                    return []
                }else if(type === '范围条'){
                    return [min/rate,max/rate]
                }else if(type === '日期范围'){
                    return []
                }
            },
            changeFilters(k,v,type,rate){
                if (type === '复选框') {
                    v=v.join('v')
                }else if(type === '范围条'){
                    v=v.map(item=>item * rate).join('to')
                }else if(type === '日期范围'){
                    v= v.map(item=>new Date(item)-0).join('to')
                    console.log(v)
                }
                this.$store.dispatch('largeTableStore/changeFilters',{k,v})
            }
        },
        components:{
            MyInputNumber
        }
    }
</script>

<style scoped>

</style>