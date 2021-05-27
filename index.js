class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")
    let finalString = []
    finalString.push(this.capitalize(words[0]))
    words = words.slice(1)

    words.forEach(word => {
      if(exceptions.includes(word)){
        finalString.push(word)
      } else {
        finalString.push(this.capitalize(word))
      }
    })

    
    return finalString.join(" ")
  }
}