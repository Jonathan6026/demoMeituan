// 封装请求：get post
//面向对象

//引入错误
import {errdata} from "./err.js"

//GET
let listing = function(urling) {
	return new Promise((resolve,reject)=>{
		uni.request({
			url:urling,
			methods:'GET'
		})
		.then(res=>{
			resolve(res)
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
export {listing}