class Formatter {
  static capitalize(string){
      return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string) {
    let splitString = string.split(" ")
    let newArray = []
    //split the string into an array
    //capitalize the first word and push onto newArray
    //iterate through the rest of the array index = 1
    //if !(no-words), capitalize and push onto the array, else just push the no-word onto the array
    //return newArray.join()
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]

    for (let i = 0; i < splitString.length; i++) {
       if(i === 0) {
            newArray.push(this.capitalize(splitString[i]))
        } else if (exceptions.includes(splitString[i])) {
            newArray.push(splitString[i]) 
        } else {
            newArray.push(this.capitalize(splitString[i]))
        }
    }
    return newArray.join(" ")
  }
}
