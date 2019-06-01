<template>
    <div class="info">
        <Form ref="formValidate" :model="myform" :rules="myrules">
            <FormItem prop="name">
                <Input type="text" v-model="myform.name" placeholder="请填写姓名">
                    <Icon type="ios-contact-outline" slot="prepend"/>
                </Input>
            </FormItem>
            <FormItem prop="passwd">
                <Input type="password" v-model="myform.password" placeholder="请填写密码">
                    <Icon type="ios-lock-outline" slot="prepend" />
                </Input>
            </FormItem>
            <FormItem prop="sex">
                <RadioGroup v-model="myform.sex">
                    <Radio label="sex">男</Radio>
                    <Radio label="sex">女</Radio>
                </RadioGroup>
            </FormItem>
           <FormItem prop="idcard">
                <Input type="text" v-model="myform.idcard" placeholder="请填写身份证号码">
                    <Icon type="ios-card-outline" slot="prepend" />
                </Input>
            </FormItem>
            <FormItem prop="chejiahao">
                <Input type="text" v-model="myform.chejiahao" placeholder="请填写车架号"></Input>
            </FormItem>

            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            myform: {
                name: "",
                password: ""
            },
            myrules: {
                name: [
                    {
                        required: true,
                        message: '必须填写姓名'
                    },
                    {
                        pattern:'/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/',

                    }
                ],
                sex: [
                    {
                        required: true,
                        message: "请选择性别"
                    }
                ],
                idcard: [
                    {
                        required: true,
                        message: "请必须填写身份证号码",
                        trigger: "change"
                    }
                ],
                idcard: [
                        {required: true, message: '请必须填写身份证号码' },
                        {
                            type: 'string',
                            pattern:'/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/', //正则匹配
                            message: '别闹，请填写准确的身份证号码', 
                        }
                    ],
                chejiahao: [
                        { required: true, message: '请必须填写车架号' },
                        {
                            trigger: 'blur',
                            // 当失去焦点的时候找服务端校验
                            async validator(rule, value, callback){
                                console.log(rule, value)
                                const data = await fetch('http://192.168.1.88/checkChejiahhao?cjh=' + value)

                                if(Math.random() > 0.5){
                                    callback(new Error('对不起，车架号已经被占用！'))
                                }else{
                                    callback()
                                }
                            }
                        }
                    ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success("Success!");
                } else {
                    this.$Message.error("Fail!");
                }
            });
        }
    }
};
</script>
<style scoped>
    .info{
        width: 500px;
        margin: 50px auto;
    }
</style>