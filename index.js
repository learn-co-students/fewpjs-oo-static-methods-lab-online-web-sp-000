class Formatter {
  //add static methods here
  static capitalize(str){
    return (str.charAt().toUpperCase() + str.slice(1))
  }
  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '' ) ;
  }

  static titleize(str){
    let strArr = str.split(" ")
    let newArr = strArr.map( (word,index) => {
      if (index === 0) {
        return Formatter.capitalize(word)
      }
      switch (word) {
        case "a":
        case "an":
        case "but":
        case "of":
        case "and":
        case "for":
        case "at":
        case "by":
        case "from":
        case "the":
        return word
        default:
          return Formatter.capitalize(word)
      }
    })
    return newArr.join(" ")
  }
}