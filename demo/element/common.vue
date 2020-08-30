<template>
	<view class="order-no" v-if="commonShow">
			<image src="../static/coen/meoyopu.png" mode="widthFix"></image>
			<text>{{tips}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips:'',
				commonShow:false
			}
		},
		methods:{		
			//设置确认组件是否显示并且显示什么内容的方法
			commonMethod(mood,tips) {
				this.tips = tips
				this.commonShow = mood
			}
		}
	}
</script>

<style scoped>
	.order-no{width: 400upx; height: 400upx;
	margin: 90upx auto 0 auto;
	text-align: center;
	font-size: 28upx;}
	.order-no image{display: block;
	width: 250upx; height: 250upx;
	margin: 0 auto;
	padding-bottom: 30upx;
	}
</style>
