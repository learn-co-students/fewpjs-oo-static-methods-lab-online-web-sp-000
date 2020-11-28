class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(string){
    // split the string
    let word = string.split(' ');
    // put all the lowercase letters in an array
    const lowercaseArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    // iterate through the string
    // capitalize the first word and the first letter of each word
    // except the lowercase ones.
    for (let i = 0; i < word.length; i++){
      for(let j = 1; j < lowercaseArray.length; j++){
        if (i = 0 && word[i] !== lowercaseArray[j]){
          word[i].toUpperCase()
        }
      }
    }
      return word.join(' ');
  }
}