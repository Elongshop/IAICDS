const util = require('../../../../utils/utils')

function getFormArray(collection,cb){
  let array = []
  util.getFormData(collection).then(res=>{
    array = res.map(item=>{
      return {
        type:item.type,
        time:item.time
      }
    })
    cb(array)
  })
}


module.exports = {
  getFormArray:getFormArray
}