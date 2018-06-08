
import { cookie } from 'cookie_js' // https://github.com/florian/cookie.js

cookie.defaults.expires = 7
// cookie.defaults.secure = true
cookie.defaults.domain = process.env.VUE_APP_SITE_HOST
cookie.defaults.path = '/'

export function saveCookie (name, value) {
  if (value === null) return cookie.remove(name)
  return cookie.set(name, value)
}

export function getCookie (name) {
  return cookie.get(name)
}

export function removeCookie (name) {
  if (name) {
    return cookie.remove(name)
  }
  return cookie.empty()
}