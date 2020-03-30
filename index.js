class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = string.split(' ')
    let newSentence = []
    for (let i = 0; i < newString.length; i++)
      if(i === 0) { 
        newSentence.push(this.capitalize(newString[i]))
      } 
      else if (exceptions.includes(newString[i])) {
        newSentence.push(newString[i])
      } else {
        newSentence.push(this.capitalize(newString[i]))
      }
      return newSentence.join(" ")
  }
}