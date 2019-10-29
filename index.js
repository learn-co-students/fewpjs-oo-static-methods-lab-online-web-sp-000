class Formatter {
  //add static methods here
    static capitalize(lower) {
      return lower.charAt(0).toUpperCase() + lower.substring(1);
    }

    static sanitize(str) {
        return str.replace(/[^A-Za-z0-9 '-]/g, "")
    }
    
    static titleize(string) {
      const notIncluded = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

      const stringArray = string.split(" ").map(function(word, index){
        if((!notIncluded.includes(word)) || (index === 0)){
          return Formatter.capitalize(word)
        } else {
          return word
        }
      })

    return stringArray.join(" ")
  }
     
    
}