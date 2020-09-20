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


module.exports = {
  formatTime: formatTime,
  getAccessToken: getAccessToken,
  getCompsData: getCompsData
}