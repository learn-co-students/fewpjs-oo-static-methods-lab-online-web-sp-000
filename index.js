class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    const reg = /[a-zA-Z0-9 ''-]/g
    let newStr = ''
    let match = reg.exec(str)
    while(match) {
      const f = match[0]
      newStr += f
      match = reg.exec(str)
    }
    return newStr
  } 
  static titleize(s) {
    let lowerCase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = s.split(' ')
    let retStr = arr.map(e => {
      if (typeof lowerCase.find(n => n === e) === 'undefined') {
        return this.capitalize(e)
      } else {
        return e
      }
    })

    return this.capitalize(retStr.join(' '))
  }
}










