class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const exceptions = ['the','a','an','but','of','and','for','at','by','from']
    let newString = string.charAt(0).toUpperCase() + string.slice(1)
    let stringArray = newString.split(" ")
    return stringArray.map(string => {
      if (exceptions.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")
  }

}