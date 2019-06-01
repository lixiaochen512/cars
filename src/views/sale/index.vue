<template>
    <div>
        <h1>卖车</h1>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <template>
                <Steps :current="step-1">
                    <Step :title="getStep(1)" content="填写车辆基本信息"></Step>
                    <Step :title="getStep(2)" content="上传车辆外观、内饰、发动机等图片"></Step>
                    <Step :title="getStep(3)" content="车辆网盘上传行驶本、保单、绿本等"></Step>
                    <Step :title="getStep(4)" content="管局审核"></Step>
                </Steps>
            </template>

            <component :is="'step' + step"></component>

            <Button type="primary" @click="goPrev">上一步</Button>
            <Button type="primary" @click="goNext">下一步</Button>
        </Content>
    </div>
</template>

<script>
    import Step1 from "./Step1.vue"
    import Step2 from "./Step2.vue"
    import Step3 from "./Step3.vue"
    import Step4 from "./Step4.vue"
    export  default {
        computed:{
            step(){
                return this.$store.state.salecarStore.step
            }
        },
        components:{
            Step1,
            Step2,
            Step3,
            Step4
        },
        methods:{
            getStep(n){
                if (n === this.step) {
                    return '正在进行'
                } else if(n > this.step){
                    return '待进行'
                }else if(n < this.step){
                    return '已完成'
                }
            },
            goPrev(){
                if (this.step <=1) {
                    return
                }
                this.$store.commit('salecarStore/changeStep',{step:this.step - 1})
            },
            goNext(){
                if (this.step >=4) {
                    return
                }
                this.$store.commit('salecarStore/changeStep',{step:this.step + 1})
            }
        }
    }
</script>

<style scoped>

</style>