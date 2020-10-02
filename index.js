class Formatter {
  //add static methods here

  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let retString = ""

    let splitString = string.split(' ')
    //debugger
    for (let j = 0; j < splitString.length; j++) {
      if (j === 0) {
        
        retString += splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1) + ' '
      } else if (j === splitString.length - 1) {
          retString += this.capitalize(splitString[j])
      } else if (splitString[j] === 'the' || splitString[j] === 'a' || splitString[j] === 'an' || splitString[j] === 'but' || 
          splitString[j] === 'of' || splitString[j] === 'and' || splitString[j] === 'for' || splitString[j] === 'at' || 
          splitString[j] === 'by' || splitString[j] === 'from' ) {
            retString += splitString[j] + ' '
      } else {
            retString += this.capitalize(splitString[j]) + ' '
      }
    }
    return retString
  }
}