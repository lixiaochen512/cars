<template>
    <div>
            <Header>
                <Menu mode="horizontal" theme="dark" 
                :active-name= '$store.state.routerStore.column' 
                @on-select = 'changeMenu'
                >
                    <div class="layout-logo">
                        <a href="/index">
                            <img src="http://aiqianduan.com/assets/images/logo.png" width="170">
                        </a>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="index">
                            首页
                        </MenuItem>
                        <MenuItem name="buy">
                            买车
                        </MenuItem>
                        <MenuItem name="sale">
                            卖车
                        </MenuItem>
                        <MenuItem name="transfer">
                            过户
                        </MenuItem>
                        <MenuItem name="insurance">
                            保险
                        </MenuItem>
                        <MenuItem name="parking">
                            停车场
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <router-view></router-view>
    </div>

</template>
<script>
    export default {
        methods:{
            changeMenu(name){
                this.$router.push({name})
            }
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    /* background: #f5f7f9; */
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 500px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>