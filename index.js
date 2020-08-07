class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace(/[^-,', A-Za-z0-9]+/g, '')
  }

  static titleize (string) {
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = string.toLowerCase().split(' ').map( words => {
      if (words === 'the' || words === 'a' || words === 'an' || words === 'but' || words === 'of' || words === 'and' || words === 'for' || words === 'at' || words === 'by' || words === 'from') {
        return words
      } else {
        return words[0].toUpperCase() + words.slice(1) 
      }
    }).join(' ')
    return newString[0].toUpperCase() + newString.slice(1)
    }
  }