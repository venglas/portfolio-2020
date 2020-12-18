const isCookieExist = cookieName => {
  return document.cookie.includes(cookieName)
}

const getCookieValue = cookieName => {
  if (!isCookieExist(cookieName)) return
  // throw new Error(`Cookie ${cookieName} not exist.`)
  const cookie = document.cookie.split(';').filter(cookie => cookie.includes(cookieName))[0].split('=')[1]
  try {
    return JSON.parse(cookie)
  } catch {
    return cookie
  }
}

const setCookieExpiringTime = days => {
  const day = 1000 * 60 * 60 * 24
  const now = new Date()
  const timeNow = now.getTime()
  const expireTime = timeNow + day * days
  now.setTime(expireTime)

  return now
}

const setCookie = (cookieName, cookieValue, expiredInDays) => {
  document.cookie = `${cookieName} = ${cookieValue}; expires=${setCookieExpiringTime(expiredInDays).toGMTString()}`
}

export { getCookieValue, setCookieExpiringTime, setCookie }
