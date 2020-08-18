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
	// 引入接口
	import {listing} from "../../api/api.js"
	//引入url接口
	import {getpreference} from "../../api/request.js"
	
	
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
				listing(getpreference)
				.then((res)=>{
					console.log(res)
					this.perferdata = res[1].data
				})
				.catch((err)=>{
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
