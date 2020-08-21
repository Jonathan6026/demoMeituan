import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		screenData:{
			delicacyData:[ ]			//用来接受
		}
	},
	mutations:{
		commmitDelicacy(state,data) {	//在mutation定义一个方法用作传参数
			console.log(data)
			state.screenData = {		//state下面的screenData对象的delicacyData
				delicacyData:data		//把形参的参数传给delicacyData
			}
		}
	}
})

export default store