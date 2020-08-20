<template>
	<view class="content">
		<Search></Search>
		<Perference :perferdata='perferdata'></Perference>
		<Title></Title>
		<view @click="toTop" :catchtouchmove='true'>
			<Delicacy id='the-id' :class="{delicacyStyle:delicacyMood}"></Delicacy>
		</view>
		<Takeout></Takeout>
	</view>
</template>

<script>
	import Delicacy from "./components/delicacy.vue"
	import Perference from "./components/perference.vue"
	import Search from "./components/search.vue"
	import Takeout from "./components/takeout.vue"
	import Title from "./components/title.vue"
	// 引入接口
	import {listing} from "../../api/api.js"
	//引入url接口
	import {getpreference} from "../../api/request.js"
	
	
	export default {
		data() {
			return {
				perferdata:[ ],
				delicacyTop:'',
				pageTop:'',
				topHigh:'',
				delicacyMood:false		//delicacy一开始是隐藏
			}
		},
		components: {
			Delicacy,
			Perference,
			Search,
			Takeout,
			Title
		},
		methods: {
			//perference接受数据
			preference() {
				listing(getpreference)
				.then((res)=>{
					console.log(res)
					this.perferdata = res[1].data
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			// 回到顶部
			toTop() {
				uni.pageScrollTo({
					scrollTop:this.topHigh,
					duration:200
				})
			}
		},
		// 通过生命周期函数监听组件离页面顶部的距离（仅微信）
		onLoad() {
			const query = wx.createSelectorQuery()
			query.select('#the-id').boundingClientRect()
			query.exec((res)=> {
				// console.log(res[0].top)
				this.delicacyTop = res[0].top        //获得组件距离顶部的位置
				this.topHigh = res[0].top 
			})
		},
		
		/* 监听页面滚动距离 */
		onPageScroll(e) {
			// console.log(e.scrollTop)
			this.pageTop = e.scrollTop                //获得当前页面位置
		},
		mounted() {
			/* 利用生命周期自动执行 */
			this.preference()
		},
		computed: {
			delicacyShow() {
				if(this.delicacyTop > this.pageTop) {   //比较位置到达了没有
					// console.log('不置顶')
					this.delicacyMood = false			//没到达位置就隐藏
				}else {
					// console.log('置顶')
					this.delicacyMood = true            //到达就显示
				}
			}
		}
	}
</script>

<style scoped>
	.content {
		margin: 0 15upx;
	}
	.delicacyStyle {                     
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
</style>

