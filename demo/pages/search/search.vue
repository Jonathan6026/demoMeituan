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
		
		<!-- 搜索历史 -->
		<view class="search-history" v-if="historyShow">
			<view class="search-title">
				<view>搜索历史</view>
				<view @click="removeStorage()"><image src="../../static/coen/searchend.svg" mode="widthFix"></image></view>
			</view>
			<!-- tab -->
			<view class="menu-block">
				<block v-for="(item,index) in historydata" :key="index">
					<view @click="historyBtn(item)">{{item}}</view>
				</block>
			</view>
		</view>
		
		<!-- 内容展示 -->
		<view class="content-left" v-if="contentShow">
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
		
		<!-- 搜索失败 -->
		<view>
			<common_false ref='theMethod'></common_false>
		</view>
	</view>
</template>

<script>
	import common_false from '../../element/common.vue' 
	import {searchurl} from '../../api/request.js'
	import {publicing} from '../../api/api.js'
	export default {
		data () {
			return {
				//关键词
				searchdata:'',
				takeshop:[],
				//预设搜索历史
				historydata:[],
				//设置历史组件是否显示
				historyShow:false,
				//商品内容是否展示
				contentShow:false
			}
		},
		components: {
			common_false
		},
		methods: {
			//搜索按钮事件
			searchBtn() {
				//如果输入内容为空，弹框
				if(this.searchdata != '') {
					console.log(this.searchdata)
					//创造一个searchCoder接受关键词然后传给Post方法
					let searchCoder = this.searchdata
					this.searchPost(searchCoder)
					this.getStorage(searchCoder)
				}else {
					uni.showToast({
						title:'输入不能为空',
						icon:"none"
					})
				}
			},
			
			//回车按钮事件
			onKeyInput(e) {
				//如果输入内容为空，弹框
				if(this.searchdata != '') {
					console.log(e.detail.value)
					//创造一个searchCoder接受关键词然后传给Post方法
					let searchCoder = e.detail.value
					this.searchPost(searchCoder)
					this.getStorage(searchCoder)
				}else {
					uni.showToast({
						title:'输入不能为空',
						icon:"none"
					})
				}
			},
			
			//记录历史关键词方法
			getStorage(e) {
				//从本地缓存取出数据
				let historyArr = uni.getStorageSync('storage_key') || [];
				//存入数组当中
				historyArr.unshift(e)
				uni.setStorageSync('storage_key', historyArr);
				this.historydata = Array.from(new Set(historyArr))
			},

			//取出本地缓存数据,并在生命周期函数中调用
			takeStorage() {
				let theStorage = uni.getStorageSync('storage_key')
				//数组去重
				this.historydata = Array.from(new Set(theStorage))
				//历史组件是否显示
				if(this.historydata == '') {
					this.historyShow = false 
				}else {
					this.historyShow =  true
				}
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
					
					if(res.data == "没有商品数据") {
						this.contentShow = false
						//调用传递数据给common组件方法
						let mood = true
						let tips = '没有商品数据'
						this.getCommonData(mood,tips)
					}else {
						this.contentShow = true
						this.takeshop = res.data
						//调用传递数据给common组件方法
						let mood = false
						let tips = ''
						this.getCommonData(mood,tips)
					}
				})
				.catch(err => {
					console.log(err)
				})
				
			},
			
			//接收common组件搜索失败方法
			getCommonData(mood,tips) {
				this.$nextTick(() => {
					this.$refs.theMethod.commonMethod(mood,tips)
				})
			},
						
			//清除历史缓存
			removeStorage() {
				uni.removeStorageSync('storage_key')
				let theStorage = uni.getStorageSync('storage_key')
				this.historydata = theStorage
			},
			
			//历史按钮
			historyBtn(e) {
				this.searchdata = e
				this.searchPost(e)
			}
		},
		created() {
			//取出本地缓存数据
			this.takeStorage()
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
		background: #eeeeee;
		border-radius: 6upx;
		font-size: 27upx;
		color: #292c33;
		text-align: center;
		padding: 10upx;
		padding-left: 30upx;
		padding-right: 30upx;
		margin: 20upx 20upx 0 0;
	}
	
	.menu-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
</style>
