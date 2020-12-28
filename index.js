class Formatter {
  
  static capitalize (str) {
    return str.replace(str[0], str[0].toUpperCase())
  }

  static sanitize (str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize (str) {
    str = this.capitalize(str).split(' ')
    for (let i = 1; i < str.length; i++) {
      let w = str[i];
      if (w !== 'the' && w !== 'a' && w !== 'an' && w !== 'but' && w !== 'of' && w !== 'and' && w !== 'for' && w !== 'at' && w !== 'by' && w !== 'from') {
        str[i] = this.capitalize(str[i])
      }
    }
    return str.join(' ');
  }

}