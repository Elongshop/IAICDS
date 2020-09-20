
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getAccessToken() {
  wx.cloud.callFunction({
    name: 'getUserToken',
    success(res) {
      wx.setStorageSync('access_token', res.result.userToken.access_token) //存储token
    },
    fail(err) {
      console.err
    }
  })
}

function getCompsData(dbName, key, cb) {
  const db = wx.cloud.database()
  db.collection(dbName).where({
    key: key
  }).get().then(res => {
    let result = res.data[0]
    if (result) {
      cb(result)
    }
  })
}
function getFormData(collection){
  const db = wx.cloud.database()
  let array = []
  return new Promise((resolve,reject)=>{
    db.collection(collection).aggregate()
    .sort({
      time:-1
    })
    .end().then(res=>{
      array =res.list.map(item=>{
        return {
          type:item.type,
          time:item.time
        }
      })
      if(array.length>=5){
        array = array.slice(0,5)
      } 
      resolve(array)
    })
  })
}

module.exports = {
  formatTime: formatTime,
  getAccessToken: getAccessToken,
  getCompsData: getCompsData,
  getFormData:getFormData
}