/** 歌曲类 */
export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach(s => {
    ret.push(s.name)
  })
  return ret.join('/')
}
/**
 * 工厂方法创建song
 * @param {json} musicData
 */
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${
      musicData.albummid
    }.jpg?max_age=2592000`,
    url: `https://ws.stream.qqmusic.com/${musicData.songid}.m4a?formtag=46`
  })
}
