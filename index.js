class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Z a-z0-9-']+/g, '');
  }

  static titleize(string) {
    let minorWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let outcome = [];
    let stringArr = string.split( " " )
    for ( let n = 0; n < stringArr.length; n++ ) {
      if ( n == 0 ) {
        outcome.push( this.capitalize( stringArr[ n ] ) )
      } else {
        if ( minorWords.includes( stringArr[ n ] ) ) {
          outcome.push( stringArr[ n ] )
        } else {
          outcome.push( this.capitalize( stringArr[ n ] ) )
        }
      }

    }
    return outcome.join( " " );
  }
}
