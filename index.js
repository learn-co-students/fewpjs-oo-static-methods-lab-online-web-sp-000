class Formatter {
  static capitalize(str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase())
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const strArr = str.split(' ')

    return strArr.map((word, idx) => {
      if (!exceptions.includes(word) || idx === 0) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
  }
}
