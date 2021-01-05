class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let excluded = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the' ]
    let titleArray = string.split(' ').map( word => excluded.find(ex => ex === word) ? word : Formatter.capitalize(word) )
    let title = Formatter.capitalize(titleArray.join(' '))
    return title
  }

}