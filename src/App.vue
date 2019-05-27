<template>
	<div>
		<!-- Layout布局路由 -->
		<router-view></router-view>
		<!-- 这里是所有全局组件（弹出层、抽屉组件）的聚集地 -->
		<CarpicLayer v-if="isShowCarpicLayer" :CarpicLayerId="CarpicLayerId"></CarpicLayer>
	</div>
</template>

<script>
	import CarpicLayer from "./components/carpic_layer/index.vue"
	export default {
		data(){
			return {
				isShowCarpicLayer: false,  	//汽车图片弹出层是否显示
				CarpicLayerId:1000088  		//弹出层默认显示的汽车照片编号
			}
		},
		components: {
			CarpicLayer
		},
		mounted () {
			// 上树即用on监听ShowCarpicLayer事件，等待emit()触发弹出层组件，并传递id参数
			this.$bus.on('ShowCarpicLayer', ({id})=>{
				this.isShowCarpicLayer = true;  //显示弹出层
				this.CarpicLayerId = id;   //改变当前显示的汽车编号
			})

			// 监听隐藏弹出层
			this.$bus.on('HideCarpicLayer', ()=>{
				this.isShowCarpicLayer = false;  //隐藏弹出层
			})
		}
	}
</script>

<style scoped>

</style>