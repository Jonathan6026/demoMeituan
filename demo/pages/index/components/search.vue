<template>
	<view>
		<!-- 定位部分 -->
		<view class="search-view">
			<image src="../../../static/coen/dingwei.svg"></image>
			<text class="search-text">广州市天河区商业城</text>
			<text>></text>
		</view>
		
		<!-- 搜索部分 -->
		<view class="search-cont">
			<view class="search">
				<image 
					src="../../../static/coen/sousuo.svg" 
					mode=""
					class="search-img"
				></image>
				<input type="text" placeholder="海底捞外卖" disabled="">
			</view>
		</view>
		
		<!-- swiper分类 -->
		<Swiper></Swiper>
		 
	</view>
</template>

<script>
	import Swiper from './common/swiper.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			Swiper
		}
		
	}
</script>

<style scoped>
 /* 定位 */
 .search-view image {
	 width: 35upx;
	 height: 35upx;
 }
 .search-view {
	 font-size: 30upx;
	 font-weight: bold;
	 display: flex;
	 align-items: center;
	 /* 垂直居中 */
	 height: 80upx;
 }
 .search-text {
	 padding: 0 10upx;
 }
 
 /* 搜索 */
 .search-img {
	 margin: auto 0 auto 20upx;
	 width: 40upx;
	 height: 40upx;
 }
 .search {
	 height: 70upx;
	 line-height: 70upx;
	 width: 100%;
	 display: flex;
	 background-color: #eff3f4;
	 border-radius: 15rpx;
 }
 .search input {
	 height: 70upx;
	 line-height: 70upx;
	 width: 100%;
	 font-size: 25upx;
	 color: #666;
 }
 .search-cont {
	 display: flex;
	 justify-content: space-between;
	 height: 70upx;
	 align-items: center; 
	 /* 垂直居中 */
 }
 

</style>
