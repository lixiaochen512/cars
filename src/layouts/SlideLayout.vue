<template>
    <div>
        <Layout>
            <Breadcrumb :style="{margin: '16px 0'}">
                <BreadcrumbItem>
                    <router-link to="/index/index">首页</router-link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <router-link :to="'/index/' + getTheOne.columnEnglish">{{getTheOne.columnChinese}}</router-link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <router-link :to="'/index/' + $store.state.routerStore.scolumn">
                        {{$store.state.routerStore.scolumnc}}
                    </router-link>
                </BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                <Layout>
                    <Sider hide-trigger :style="{background: '#fff'}">
                        <Menu theme="light" width="auto" :open-names="['1']"
                         :active-name="$store.state.routerStore.scolumn" 
                         @on-select='changeMenu'
                        >
                            <MenuItem v-for="item in getTheOne.children" :name="item.en"  :key="item.en">
                                {{item.cn}}
                                <!-- {{$store.state.routerStore.scolumn}} -->
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <h1>{{$store.state.routeStore}}</h1>
                        {{$store.state.routerStore.scolumn}}
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    </div>
</template>

<script>
    import buyRoute from "../router/buyRoute.js"
    import transferRoute from "../router/transferRoute.js"


    // 路由对象名称
    const obj = {
        buy: buyRoute,
        transfer: transferRoute
    }
    export default {
        computed:{
            getTheOne(){
                // console.log(this.$store.state.routerStore.column)
                return obj[this.$store.state.routerStore.column]
            }
        },
        methods:{
            changeMenu(name){
                // console.log(name)
                this.$router.push({name})
            }
        }
        
    }
</script>

<style scoped>

</style>