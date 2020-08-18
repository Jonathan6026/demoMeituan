<template>
	<view class="content">
		<Search></Search>
		<Perference :perferdata='perferdata'></Perference>
		<Title></Title>
		<Delicacy></Delicacy>
		<Takeout></Takeout>
	</view>
</template>

<script>
	import Delicacy from "./components/delicacy.vue"
	import Perference from "./components/perference.vue"
	import Search from "./components/search.vue"
	import Takeout from "./components/takeout.vue"
	import Title from "./components/title.vue"
	export default {
		data() {
			return {
				perferdata:[ ]
			}
		},
		components: {
			Delicacy,
			Perference,
			Search,
			Takeout,
			Title
		},
		mounted() {
			/* 利用生命周期自动执行 */
			this.preference()
		},
		methods: {
			//perference
			preference() {
				uni.request({
					url:'https://meituan.thexxdd.cn/api/forshop/getprefer',
					methods:'GET'
				})
				.then(res=>{
					console.log(res[1].data)
					this.perferdata=res[1].data
				})
				.catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		margin: 0 15upx;
	}
</style>
