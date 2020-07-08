class Formatter {
  // add static methods here
  static capitalize (s) {
    const arr = s.split('')
    arr[0] = arr[0].toUpperCase()
    return arr.join('')
  }

  static sanitize (s) {
    const regex = /^[a-zA-Z\-\'\"\s]+$/
    const arr = ['']
    for (const c in s) {
      if (regex.exec(s[c])) {
        arr.push(s[c])
      }
    }
    return arr.length > 1 ? arr.join('') : arr[0]
  }

  static titleize (s) {
    const r = []
    const noCap = [
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from'
    ]
    const arr = s.split(' ')
    for (const w in arr) {
      if (noCap.filter(el => el === arr[w]).length === 0 || r.length === 0) {
        r.push(this.capitalize(arr[w]))
      } else {
        r.push(arr[w])
      }
    }
    return r.join(' ')
  }
}
