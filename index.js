class Formatter {
  //add static methods here
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(" ")
    let newArray = []
    newArray.push(Formatter.capitalize(array[0]))
    for (let i = 1; i < array.length; i++) {
      if (exceptions.includes(array[i]) ) {
        newArray.push(array[i])
      }
      else {
        newArray.push(Formatter.capitalize(array[i]))
      }
    }
    return newArray.join(" ")
  }
}