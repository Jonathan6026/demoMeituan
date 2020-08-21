// 封装请求：get post
//面向对象

//引入错误
import {errdata} from "./err.js"

//GET
let listing = function(urling) {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urling,
			method:'GET'
		})
		.then(res=>{
			resolve(res[1])
		})
		.catch(err=>{
			/* 添加错误时操作 */
			let theerr = '请稍后再试'
			errdata.errshow(theerr)
			reject(err)
		})
	})
}

//POST 请求
let publicing = function(urling,shopdata) {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urling,
			method: 'POST',
			data:shopdata
 		})
		.then(res=>{
			resolve(res[1])
		})
		.catch(err=>{
			/* 添加错误时操作 */
			let theerr = '请稍后再试'
			errdata.errshow(theerr)
			reject(err)
		})
	})
}

// 导出
export {listing,publicing}