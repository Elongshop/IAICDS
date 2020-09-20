// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const token ='a26cf5ac6aa64c9da06b43cc46271fac.e43a8ff6e92c298580c4e7e0a2d4d04f'
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let params = new URLSearchParams()
  params.append('divice_id',event.currentDevice)
  params.append('group_id',1)
  params.append('atrribute',event.currentParams)
  params.append('access_token',token)
  const response = await axios({
    method:'post',
    url:"https://api.phmlearn.com/component/data/fengji",
    data:params
  })
  return {
    array:response.data.data
  }
}

