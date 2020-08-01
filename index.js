class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^0-9a-zA-Z '-]/g, '')
  }

  static titleize() {

  }

}