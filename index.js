class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    const nonCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let elements = string.split(" ")
    let storeElements = []

    for(let i = 0; i < elements.length; i++){
      if (!nonCapitalize.includes(elements[i])) {
        storeElements.push(this.capitalize(elements[i]))
      } else {
        storeElements.push(elements[i])
      }
    }
    let newPhrase = storeElements.join(" ")
    return this.capitalize(newPhrase)
  }

}