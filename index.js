class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) { 
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string){ 
    let splitString = string.split(" ")
    let array = [];
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

    for (let i = 0; i < splitString.length; i++){ 
      if (i === 0) { 
        array.push(this.capitalize(splitString[i]))
      } else { 
        if (exceptions.includes(splitString[i])) {
          array.push(splitString[i])
        } else { 
          array.push(this.capitalize(splitString[i]))
        }
      } 
    }
    return array.join(" ");
  }
}

