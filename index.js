class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'-' ']+/g, '')
  }
  static titleize(string){
    return this.capitalize(string.split(' ').map(word =>{
      switch(word){
        case 'a':
          return  word
          
        case 'an':
          return word
          
        case 'but':
         return  word
          
        case 'of':
         return  word
          
        case 'and':
         return  word
          
        case 'for':
          return word
          
        case 'at':
          return word
          
        case 'by':
         return  word
          
        case 'the':
          return word
          
        case 'from':
          return word
          
        default:
         return  this.capitalize(word)
      }
    }).join(' '))
  }
  //add static methods here
}