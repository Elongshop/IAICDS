// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  let param1 = new URLSearchParams()
  param1.append('username','jiaody')
  param1.append('password','lx960211')
  const response = await axios({
    method:'POST',
    url:"https://api.phmlearn.com/auth/apiInfo",
    data:param1
  })
  const apiKey = response.data.data.apiKey
  const apiSecret =response.data.data.apiSecret
  let param2 = new URLSearchParams()
  param2.append("api_key",apiKey)
  param2.append("api_secret",apiSecret)
  const result = await axios({
    method:'POST',
    url:"https://api.phmlearn.com/auth/access_token",
    data:param2
  })
  return {
    userToken:result.data.data
  }
}