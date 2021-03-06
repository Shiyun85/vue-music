import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    key: 'all_all_all',
    page: 'list',
    pagesize: 100,
    pagenum: 1,
    g_tk: 1664029744,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })
  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    singermid: singerId,
    order: 'listen',
    begin: 0,
    num: 100,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    songstatus: 1,
    g_tk: 1664029744
  })
  return jsonp(url, data, options)
}
