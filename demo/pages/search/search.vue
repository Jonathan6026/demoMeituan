<template>
	<view>
		<!-- 搜索栏 -->
		<view class="search-cont">
			<view class="search">
				<input 
					type="text" 
					placeholder-class="inputclass"
					confirm-type="search" 		
					focus="true"
					placeholder="请输入关键字"
					v-model="searchdata"	
					@confirm="onKeyInput"	
				>
			</view>
			<view class="search-code" @click="searchBtn">
				搜索
			</view>
		</view>
		
		
		<!-- 内容展示 -->
		<view class="content-left" >
			<block v-for="(item,index) of takeshop"
			:key="index">
				<view class="content-view">
					<view class="content-img">
						<image :src="item.logo" mode="aspectFill"></image>
					</view>
					<view class="content-title">
						<text class="content-take">{{item.shop}}</text>
						<view class="content-monthly">
							<text>月售200</text>
							<text>约{{item.duration}}分钟</text>
						</view>
						<view class="content-starting">
							<text>起送￥{{item.delivering}}</text>
							<text>配送￥{{item.physical}}</text>
							<text>人均￥{{item.capita}}</text>
						</view>
						<view class="content-starting">
							<image src="../../static/coen/liwu.svg" mode="widthFix"></image>
							<text>{{item.types}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {searchurl} from '../../api/request.js'
	import {publicing} from '../../api/api.js'
	export default {
		data () {
			return {
				//关键词
				searchdata:'',
				takeshop:[]
			}
		},
		methods: {
			//搜索按钮事件
			searchBtn() {
				console.log(this.searchdata)
				//创造一个searchCoder接受关键词然后传给Post方法
				let searchCoder = this.searchdata
				this.searchPost(searchCoder)
			},
			//回车按钮事件
			onKeyInput(e) {
				console.log(e.detail.value)  
				//创造一个searchCoder接受关键词然后传给Post方法
				let searchCoder = e.detail.value
				this.searchPost(searchCoder)
			},
			//发送搜索请求方法
			searchPost(e) {
				//因为传对象所以用data包裹
				let data = {
					searchdata:e
				}
				publicing(searchurl,data)
				.then(res => {
					console.log(res)
					this.takeshop = res.data
				})
				.catch(err => {
					console.log(err)
				})
				
			} 
		}
	}
</script>

<style scoped>
	@import url("../../common/index.css");
	.content-left{margin: 0 20upx;}
	.search{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		background:#f8f8f8;
		border-radius: 20upx;
		margin-left: 20upx;
		}
	.search input{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 30upx;
		color: #666666; 
		padding-left: 30upx;
	} 
	.search-cont{
		display: flex;
		justify-content: space-between; 
		height: 70upx; 
		align-items: center;
		padding: 30upx 0;
	}
	.search-code{
		width: 150upx; 
		height: 50upx; 
		text-align: center; 
		font-size: 30upx;
	}
	/* 搜索历史 */
	.search-history{
		margin: 20upx;
	}
	.search-title{
		font-size: 30upx; 
		font-weight: bold;
		display: flex;
		justify-content:space-between;
		align-items: center;
		height: 60upx;
		line-height: 60upx;
	}
	.search-title image{
		width: 36upx; 
		height: 36upx; 
		display: block;
	}
	.menu-block view {
		background: #f7f8fa;
		border-radius: 6upx;
		font-size: 27upx;
		color: #292c33;
		text-align: center;
		padding: 10upx;
		margin: 20upx 20upx 0 0;
	}
	
	.menu-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
</style>
