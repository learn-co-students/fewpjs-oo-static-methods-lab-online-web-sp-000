class Formatter {
  static capitalize(str){
    let newStr = str.split("")
    
    let ltr = newStr[0].toUpperCase()
    let t = newStr.shift()
  
    newStr.unshift(ltr)

    return newStr.join("")
  }

  static sanitize(val){
    return val.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str){
    let untouchables = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let words = str.split(" ")

    let arrayOfWords = words.map(word => {
      if (words[0] === word){
        return this.capitalize(word)
      }
      else if (!untouchables.includes(word)) {
  
        return this.capitalize(word)
      }
      else {
        return word 
      }
    })
    
    return arrayOfWords.join(" ")
  } 
}