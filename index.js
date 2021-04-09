class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let wordArray = string.split(" ")
    for (let n = 0; n< wordArray.length; n++){
      if(n == 0) {
        result.push( this.capitalize( wordArray[n] ) )
      }
      else {
        if (exceptions.includes( wordArray[n] ) ) {
          result.push( wordArray[n] )
        }
        else {
          result.push( this.capitalize( wordArray[n] ) )
        }
      }
      
    }
    return result.join( " " );
  }
}