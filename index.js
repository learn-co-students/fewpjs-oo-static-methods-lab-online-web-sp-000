class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let newString = string.replace(/[^A-Za-z0-9-'\s]/g, '')
    return newString
  }

  static titleize(string) {
    let array = string.split(" ")
    let newArray = []

    array.map((s) => {
      if (array.indexOf(s) === 0) {
        newArray.push(s[0].toUpperCase() + s.slice(1))
      } else if (s !== 'the' && s !== 'a' && s !== 'an' && s !== 'but' && s !== 'of' && s !== 'and' && s !== 'for' && s !== 'at' && s !== 'by' && s !== 'from') {
        newArray.push(s[0].toUpperCase() + s.slice(1))
      } else {
        newArray.push(s)
      }
    })

    return newArray.join(" ")
  }
}
