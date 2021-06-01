class Formatter {
  //add static methods here
  static capitalize(string) {
    let firstLetter = string[0].toUpperCase()
    let restOfWord = string.slice(1)
    return firstLetter + restOfWord
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  
  static titleize(string) {
    let exceptions = ['a', 'an', 'but', 'of', 'and', 'and', 'for', 'at', 'by', 'from', 'the']
    let arrayOfStrings = string.split(' ')
    return arrayOfStrings.map((e, i) => {
      if (i === 0 || !exceptions.includes(e)) {
        return this.capitalize(e)
      } else {
        return e
      }
    }).join(' ')
  }
}