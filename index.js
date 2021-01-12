class Formatter {
  //add static methods here
  static capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }

  static sanitize(sentence) {
    return sentence.replace(/[^A-Za-z0-9-'\s]+/g,'')
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return string.split(' ').map((x, index) => {
      if (index === 0) {
        return x.charAt(0).toUpperCase() + x.slice(1)
      } else if (words.some(word => x == word)) {
        return x
      } else {
        return x.charAt(0).toUpperCase() + x.slice(1)
      }
    }).join(' ')
  }
}