<template>
	<view >
		<!-- 筛选部分 -->
		<view class="prefer-posi">
			<view class="delicacy-view">
				<!-- 点击展开列表 -->
				<view class="delicacy-list delicacy-grow" @click="showRanking">
					<text>{{ranking}}</text>
					<image src="../../../static/coen/paixu.png"></image>
				</view>
				<view class="delicacy-grow" @click="shdowHide">
					销量高
				</view>
				<view class="delicacy-grow" @click="shdowHide">
					速度快
				</view>
				<view class="delicacy-grow" @click="shdowHide">
					下单返现
				</view>
				<view class="delicacy-list delicacy-right" @click="screenBtn()">
					<text>筛选</text>
					<image src="../../../static/coen/shaixuan.png"></image>
				</view>
			</view>
		
		
			<!-- 综合排序 展开栏-->
			<view class="sortlist " v-if="sortlistshow">
				<block v-for="(item,index) of sortlist" :key="index">
					<!-- 点击切换ranking并且颜色变化 -->
					<text 
					 @click="changeRanking(index,item.name)"
					 :class="{active:index == num}"
					>{{item.name}}</text>
				</block>
			</view>
		
			<!-- 筛选区 展开栏-->
			<view class="sortlist sortlist-view" v-if="screenShow">
				<!-- 商家特色多选 -->
				<block v-for="(item,index) of screendata" :key='index'>
					<view>
						<view class="sortlist-title">
							{{item.title}}
						</view>
						<view class="sortlist-flex">
							<block v-for="(itemdata,indexs) of item.datas" :key='indexs'>
							 <text class="choice">{{itemdata.name}}</text>
							</block>
						</view>
					</view>
				</block>
				<!-- 人均价格单选 -->
				<block v-for="(item,index) of person" :key='index'>
					<view>
						<view class="sortlist-title">
							{{item.title}}
						</view>
						<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) of item.datas" :key="indexs">
							<text class="choice">{{itemdata.name}}</text>
						</block>
						</view>
					</view>
				</block>
				<!-- 底部按钮 -->
				<view class="sortlist-bottom">
					<text>清空</text>
					<text>完成</text>
				</view>
			</view>
		</view>
		
			<!-- 透明背景 -->
		<view class="shdow" v-if="shdow" @click="shdowHide"></view>
		
	</view>
</template>

<script>
	export default {
		data () {
			return {
				ranking:'综合排序',
				num:0,
				shdow:false,/* 隐藏阴影 */
				sortlistshow:false,
				screenShow:false,
				/* 表面选择 */
				sortlist: [
					{
						"name":"综合排序",
						"screen":"_id",
						"nums":1
					},
					{
						"name":"起送价最低",
						"screen":"delivering",
						"nums":1
					},
					{
						"name":"配送费最低",
						"screen":"physical",
						"nums":1
					},
					{
						"name":"人均高到低",
						"screen":"capita",
						"nums":-1
					},
					{
						"name":"人均低到高",
						"screen":"capita",
						"nums":1
					}
				],
				// 多选
				screendata:[
					{
						"title":"商家特色(可多选)",
						"datas":[
							{
								"id":1,
								"sign":'duration',
								"name":'配送最快'
							},
							{
								"id":1,
								"sign":'deliver',
								"name":'0元起送'
							},
							{
								"id":1,
								"sign":'physi',
								"name":'免配送费'
							}
						],
					}		
				],
				// 人均价筛选
				person:[
					{
						"title":"人均价",
						"datas":[
							{
							"name":"20元以下",
							"per":{
								"$lt":20
								},
							},
							{
							"name":"20-40元",
							"per":{
								"$lte":40,
								"$gte":20
								},
							},
							{
							"name":"40元以上",
							"per":{
								"$gt":40
								},
							},
						]
					}
				],
			}
		},
		methods: {
			// 点击展开列表
			showRanking() {
				if(this.sortlistshow == false){
					this.sortlistshow = true	 //列表出现
					this.shdowShow()             /* shdow出现*/
					this.screenShow = false		 //筛选列表隐藏
				}else{
					this.shdowHide()
					
				}
			},
			/* 改变ranking 和改变index以至于改变选中颜色 */
			changeRanking(index,e) {
				this.ranking = e
				this.num = index
				this.shdowHide()
			},
			/* 阴影show */
			shdowShow() {
				setTimeout(()=>{
					this.shdow = true
				},100) 
			},
			/* 阴影hide */
			shdowHide() {
				this.shdow = false
				this.sortlistshow = false
				this.screenShow = false
			},
			// 筛选screen
			screenBtn() {
				this.sortlistshow = false
				this.screenShow = true
				this.shdowShow()
			}
		}
	}
</script>

<style>
	/* 筛选部分 */
	.prefer-posi {
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
		z-index: 99;
		background: #fff;
	}
	
	.delicacy-view image {
		
		width: 35upx;
		height: 35upx;
	}
	.delicacy-view {
		display: flex;
		font-size: 32upx;
		padding: 10upx 5upx;
		color: #666;
	}
	.delicacy-list {
		display: flex;
		align-items: center;
	}
	.delicacy-right {
		justify-content: flex-end;
		flex-grow: 5;
	}
	.delicacy-grow {
		flex-grow: 1;
	}
	.delicacy-grow:nth-child(1) {
		width: 180upx;
	}
	/* 综合排序 展开栏 */
	.sortlist text{
		display: block;
		height: 70upx;
		line-height: 70upx;
		font-size: 30upx;
		border-top: 1upx solid #ededed;
	}
	
	/* ranking选中切换样式 */
	.active {
		color: #ffd348 !important;
	}
	
	/* 筛选部分----样式 */
	.sortlist-view {
		height: 700upx;
		position: relative;
	}
	.sortlist-title {
		padding: 0 15upx;
		font-size: 30upx;
		height: 60upx;
		line-height: 60upx;
		overflow-y: scroll;
	}
	/* 选择按钮样式 */
	.choice {
		font-size: 28upx;
		background: #F8F8F8;
		height: 55upx;
		line-height: 55upx;
		color: #666666;
		width: 200upx;
		margin: 7.5px;
		text-align: center;
		display: block;
		border-radius: 5px;
	}
	.sortlist-flex {
		display: flex;
		align-items: center;
		margin-bottom: 30upx;
	}
	/* 底部按钮 */
	.sortlist-bottom {
		background-color: #fff;
		height: 80upx;
		border-top: 1upx solid #e4e4e4;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.sortlist-bottom text {
		width: 50%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
	.sortlist-bottom text:nth-child(2) {
		background-color: #ffd348;
	}
	
	/* 阴影部分 */
	.shdow {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,.5);
	}
	
	
</style>