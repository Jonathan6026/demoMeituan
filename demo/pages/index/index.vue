<template>
	<view class="content">
		<Search></Search>
		<Perference></Perference>
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
				 
			}
		},
		components: {
			Delicacy,
			Perference,
			Search,
			Takeout,
			Title
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.content {
		margin: 0 15upx;
	}
</style>
