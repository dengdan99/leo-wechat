let _mergeWith = require('lodash/mergeWith')
let _isArray = require('lodash/isArray')
let _clone = require('lodash/clone')

export function getElement (expr) {
  return (typeof expr === 'string') ? document.querySelector(expr) : expr
}

export function getElements (expr) {
  return (typeof expr === 'string') ? document.querySelectorAll(expr) : expr
}

export function getComputedStyle (el, key) {
  var computedStyle = window.getComputedStyle(el)
  return computedStyle[key] || ''
}

// Easing Equations (c) 2003 Robert Penner, all rights reserved.
// Open source under the BSD License.
export function easeOutCubic (pos) {
  return (Math.pow((pos - 1), 3) + 1)
}

export function easeInOutCubic (pos) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3)
  }
  return 0.5 * (Math.pow((pos - 2), 3) + 2)
}

export function randomString (len) {
  len = len || 32
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'    // ****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****
  const maxPos = $chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}

export function objKeySort (obj) {
  var newkey = Object.keys(obj).sort()
  var newObj = {}
  for (var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]]
  }
  return newObj
}

export let setDocumentTitle = title => {
  document.title = title
  if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
    var i = document.createElement('iframe')
    i.src = '/favicon.ico'
    i.style.display = 'none'
    i.onload = function () {
      setTimeout(function () {
        i.remove()
      }, 10)
    }
    document.body.appendChild(i)
  }
}

// 根据target自动赋值 需为{} 没有type时为merge type=1只替换target有的属性 type=2绝对替换成source
export let autoValue = (target, source, type) => {
  if (!type) {
    _mergeWith(target, source, (a, b) => {
      if (_isArray(b) && b.length === 0) {
        return []
      }
    })
  } else if (type === 1) {
    let eachValuation = (t, s) => {
      for (let k in target) {
        t[k] = _clone(s[k])
        if (Object.prototype.toString.call(t[k]) === '[object Object]') {
          eachValuation(t[k], _clone(s[k]))
        }
      }
    }
    eachValuation(target, source)
  } else if (type === 2) {
    target = _clone(source)
  }
}
