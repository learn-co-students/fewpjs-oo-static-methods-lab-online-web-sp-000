class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let array = string.split(' ')
    let badWords = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'])
    let newArray = []
    for(let x = 0; x < array.length; x++) {
      if(x == 0) {
        newArray.push(this.capitalize(array[x]))
      }
      else if(badWords.has(array[x])) {
        newArray.push(array[x])
      }
      else {
        newArray.push(this.capitalize(array[x]))
      }
    }
    return newArray.join(' ')
  }

}