var TokenKey = 'userInfo'
var dayTime = 1000 * 60 * 60 * 24
var timeZone = true // true: 格林尼治时间; false: 世界时间
var date = new Date()
// 设置
export function setCookie (key = TokenKey, val, timer = 100, TZ = timeZone) {
  var expires = date.setTime(date.getTime() + dayTime * timer) // 设置未来时间
  if (TZ) {
    expires = date.toGMTString() // 把当前本地系统时间转换为格林威治时间 （GMT） 时区
  } else {
    expires = date.toUTCString() // 把当前本地系统时间转换为世界时间 （UTC） 时区
  }
  document.cookie = key + '=' + val + ';path=/;expires=' + expires
}
// setCookie(TokenKey, '123', 1, false)
// 获取
export function getCookie (name) {
  var arrStr = document.cookie.split('; ')
  var json = {}
  arrStr.forEach((val, i, item) => {
    json[arrStr[i].split('=')[0]] = arrStr[i].split('=')[1]
  })
  return json[name]
}

// 删除
export function removeCookie () {
  setCookie(TokenKey, getCookie(TokenKey), -1, false)
}
