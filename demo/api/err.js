//封装错误
let errdata = {
	errshow(theerr) {
		uni.showToast({
		    title:theerr ,
		    duration: 2000,
			icon: 'none'
		});
	}
}

export {errdata}