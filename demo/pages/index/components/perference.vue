<template>
	<view class="perfer-content">
		<view class="perfer-title">
			为你精选
		</view>
		<scroll-view  scroll-x="true" class="scroll" scroll-with-animation="true" >
			<view class="perfer-dis">
				<block v-for="(item,index) of perferdata" :key="index">
					<view class="perfer-view">
						<image :src="item.image"></image>
						<text>{{item.title}}</text>
						<text>{{item.lable}}</text>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		props: {
			perferdata:Array
		}
	}
</script>

<style scoped>
	/* 外壳 */
	.perfer-content {
		margin: 30upx 0;
	}
	.perfer-title {
		font-size: 35upx;
		height: 50upx;
		line-height: 50upx;
		margin-bottom: 20upx;
	}
	.scroll {
		/* 必要 */
		white-space: nowrap;
		width: 100%;
		height: 300upx;
	}
	.perfer-dis {
		display: flex;
		justify-content: space-between;
	}
	/* 每一个视图 */
	.perfer-view {
		height: 300upx;
		width: 300upx;
		padding: 0 8upx;
	}
	.perfer-view image {
		width: 300upx;
		height: 200upx;
		border-radius: 15upx;
	}
	.perfer-view text {
		height: 45upx;
		line-height: 45upx;
		/* 超出隐藏 */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-box-clamp: 1;
		overflow: hidden;
	}
	/* 图片下面的标题和细节 */
	.perfer-view text:nth-child(2){
		font-size: 30upx;
	}
	.perfer-view text:nth-child(3) {
		font-size: 26upx;
		color: #9c9c9c;
	}
	.perfer-view view:nth-child(2) {
		padding: 0 7upx !important;
	}
</style>
