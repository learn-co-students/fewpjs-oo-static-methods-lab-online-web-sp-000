class Formatter {
  static capitalize(string){
    let firstLetter = string[0].toUpperCase()
    let otherLetters = string.slice(1)
    return firstLetter + otherLetters
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let excluded = ['a', 'an', 'but', 'of', 'and', 'and', 'for', 'at', 'by', 'from', 'the']
    let wordArray = string.split(' ')
    return wordArray.map((word, i) => {
      if (i === 0 || !excluded.includes(word)) {
        return this.capitalize(word)}
      else {
        return word 
      }
    }).join(' ') 

  }
}