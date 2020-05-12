class Formatter {
  //add static methods here
  static capitalize(string) {
    let newString = string[0].toUpperCase() + string.slice(1)
    return newString
  }

  static sanitize(string) {
    let newString = string.replace(/[^-'\w\s]/g, '')
    return newString
  }

  static titleize(string) {
    let array = string.split(' ')

    const newArray = array.map(x => {
      if (x === 'the' || x === 'a' || x === 'an' || x === 'but' || x === 'of' || x === 'and' || x === 'for' || x === 'at' || x === 'by' || x === 'from') {
        return x
      } else {
        return (x[0].toUpperCase() + x.slice(1))
      }
    })

    let firstWord = newArray[0][0].toUpperCase() + newArray[0].slice(1)
    newArray.splice(0, 1, firstWord)

    return newArray.join(' ')
  }
}