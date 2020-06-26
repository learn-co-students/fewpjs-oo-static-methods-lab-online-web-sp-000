class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let title = string.split(' ').map(word => {
      if (!exceptions.find((exception) => exception === word) || word === string.split(' ')[0]) {
        return Formatter.capitalize(Formatter.sanitize(word))
      }
      else {
        return Formatter.sanitize(word)
      }
    })
    return title.join(' ')
  }
}