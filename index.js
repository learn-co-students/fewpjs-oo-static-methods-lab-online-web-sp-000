class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    // Split the string by white spaces, and create a variable to track the updated title. 
    let result =[];
    let arrayOfWords = sentence.split(" ");
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}

/*
Write a method static capitalize that takes in a string and capitalizes the first letter.
Write a method static sanitize that takes in a string and removes all non-alphanumeric
 characters except for dashes, single quotes and spaces.
Write a method static titleize that takes in a string and capitalizes all words in a
 sentence except the, a, an, but, of, and, for, at, by, and from;
  and always capitalizes the first word.
*/

/*
Lowercase the whole string using str.toLowerCase().
Replace every word’ first character to uppercase using .replace.
Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
Regex explanation:
Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
The g modifier searches for other such word pattern in the whole string and replaces them.

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
*/
