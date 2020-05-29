
import Axios from './axios'
// 获取表格数据
export function getItemList (datas) {
  return Axios({
    url: '/hcd/rest/osdDeviceController/queryOsdDevice',
    method: 'get',
    data: datas
  })
}
// 获取在线离线个数
export function getonin (datas) {
  return Axios({
    url: '/hcd/rest/osdDeviceController/queryCount',
    method: 'get',
    data: datas
  })
}
// 获取萤火石密钥
export function gettookin () {
  return Axios({
    url: 'https://open.ys7.com/api/lapp/token/get',
    method: 'post',
    data: 'appKey=d1d839e1eee04b63908b1807a5bdba1a&appSecret=11b435ed63f8e5d47ead170a480c4d33'
  })
}
// 萤火石云台接口
export function geiyuntai (cooker, yuntai, kongzhi) {
  return Axios({
    url: 'https://open.ys7.com/api/lapp/device/ptz/start',
    method: 'post',
    data: 'accessToken=' + cooker + '&deviceSerial=' + yuntai + '&channelNo=1&direction=' + kongzhi + '&speed=2'
  })
}

export function getalarm () {
  return Axios({
    url: 'https://open.ys7.com/api/route/alarm/v3/devices/{deviceSerial}/alarm/sound',
    method: 'post'
  })
}
// 萤火石报警信息
export function getplace (cooker) {
  return Axios({
    url: 'https://open.ys7.com/api/lapp/alarm/list',
    method: 'post',
    data: 'accessToken=' + cooker + '&startTime=&endTime=&alarmType=-1&status=2&pageStart=0&pageSize=7'
  })
}
