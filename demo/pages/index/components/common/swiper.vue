<template>
	<view class="swiper-view">
		<swiper @change="bannerchange"><!-- 绑定换页事件 -->
			<!-- 遍历二维数组-->
			<block 
			 v-for="(item,index) of lable"
			 :key='index'	
			>
			<swiper-item>
				<view class="swiper-item">
				<block 
				 v-for="(thelist,index) of item"
				 :key='index'
				>
				<view class="swiper-img ">
					<image
					 :src="thelist.img"
					 class="uploading"
					 mode="widthFix"
					></image>
					<text>{{thelist.title}}</text>
				</view>
				</block>
				</view>
			</swiper-item>
			</block>
		</swiper>
		<!-- swiper指示点 -->
		<view class="instruct-view">
			<block  v-for="(item,index) of instructdata" :key="index">
				<view class="instruct" :class="{active:index == num}">
					{{item}}
				</view>
			</block> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// swiper指示点
				instructdata: ['',''],
				num: 0,
				// swiper的数据
				lable: [
					[
						{
							'img':'/static/inster/meishi.png',
							'title':'美食'
						},
						{
							'img':'/static/inster/chaoshi.png',
							'title':'超市便利'
						},
						{
							'img':'/static/inster/shuiguo.png',
							'title':'蔬菜水果'
						},
						{
							'img':'/static/inster/meituan.png',
							'title':'美团专送'
						},
						{
							'img':'/static/inster/paotui.png',
							'title':'跑腿代购'
						},
						{
							'img':'/static/inster/yexiao.png',
							'title':'夜宵'
						},
						{
							'img':'/static/inster/jintie.png',
							'title':'津贴联盟'
						},
						{
							'img':'/static/inster/pinping.png',
							'title':'甜点饮品'
						},
						{
							'img':'/static/inster/shaokao.png',
							'title':'龙虾烧烤'
						},
						{
							'img':'/static/inster/dangao.png',
							'title':'甜蜜蛋糕'
						}
					],
					[
						{
							'img':'/static/inster/hanbao.png',
							'title':'汉堡披萨'
						},
						{
							'img':'/static/inster/liaoli.png',
							'title':'日韩料理'
						},
						{
							'img':'/static/inster/malatang.png',
							'title':'麻辣烫'
						},
						{
							'img':'/static/inster/kuaican.png',
							'title':'快食简餐'
						},
						{
							'img':'/static/inster/xianhua.png',
							'title':'浪漫鲜花'
						},
						{
							'img':'/static/inster/lazi.png',
							'title':'无辣不欢'
						},
						{
							'img':'/static/inster/jiaozi.png',
							'title':'饺子馆'
						},
						{
							'img':'/static/inster/xiaochi.png',
							'title':'小吃馆'
						},
						{
							'img':'/static/inster/baofan.png',
							'title':'煲仔饭'
						},
						{
							'img':'/static/inster/qita.png',
							'title':'其他'
						}
					]
				]
			}
		},
		methods:{
			// swiper指示点方法
			bannerchange(e) {
				console.log(e.detail.current)
				this.num = e.detail.current
			}
		}
	}
</script>

<style scoped>
	/* swiper样式*/
	swiper {
		 height: 320upx !important;
	}
	.swiper-item {
		 display: flex;
		 flex-wrap: wrap;
		 align-items: center;
		 justify-content: space-between;
		 height: 320upx;
	}
	/* 每个图标样式 */
	.swiper-img {
		 width: calc((100%/5)-12px) !important;
		 margin: 8px;
		 position: relative;
		 text-align: center;
		 
	}
	.swiper-img text {
		 padding-top: 20upx;
		 font-size: 25upx;
	}
	.uploading {
		 width: 70upx;
		 height: 70upx;
		 border-radius: 50upx;
		 display: block;
		 margin: 0 auto;
	}
	/* swiper指示点样式*/
	.instruct-view {
		 display: flex;
		 justify-content: center;
		 padding-top: 10upx;
	}
	.instruct {
		 background: #e6e6e6;
		 height: 10upx;
		 width: 30upx;
		 border-radius: 50upx;
		 margin: 0 10upx;
	}
	.active {
		background-color: #F0AD4E ; 
	}
</style>
