class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    console.log(string)
    let nonCap = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let newArray = []
    let wordArray = string.split(' ')
    // console.log(wordArray)
    for (let i = 0; i < wordArray.length; i++) {
      if (i === 0) {
        newArray.push(this.capitalize(wordArray[0]))
        // after we capitalize each first word we add it to the newArray
      }
      else if ( nonCap.includes(wordArray[i])) {
        newArray.push(wordArray[i])

      }
      else {
        newArray.push(this.capitalize(wordArray[i]))
      }
    }
  return (newArray.join(' '))
  }
}
