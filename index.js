class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let stringArr = []
    stringArr = string.split(" ")
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return stringArr.map((x, i) => {
      return exceptions.includes(x) && i!=0 ? x : this.capitalize(x)
    }).join(' ')
  }
}