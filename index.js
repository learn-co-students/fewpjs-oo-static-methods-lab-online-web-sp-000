class Formatter {
  static capitalize(string) {
    let first = string.charAt(0).toUpperCase()
    return first + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = string.split(' ')
    let wordArray = words.map(word => {
      if (word === words[0]) {
        return this.capitalize(word)
      } else if (exceptions.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    })
    return wordArray.join(' ')
  }
}