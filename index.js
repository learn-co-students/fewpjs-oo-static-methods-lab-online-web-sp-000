class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^/\s/A-Za-z0-9-']+/g, '')
  }

  static titleize(string){ 
     const stringArray = string.split(' ');
     return stringArray.map((item) => {
        let prepositionsArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        if ((prepositionsArray.indexOf(item) === -1) ||(stringArray.indexOf(item) === 0)){
          return item.charAt(0).toUpperCase() + item.slice(1)
         } else {
        return item
          }
      }).join(' ')
    }
}