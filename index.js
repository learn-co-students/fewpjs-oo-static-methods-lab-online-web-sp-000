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
    // console.log(word)
    // put all the lowercase letters in an array
    const lowercaseArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    // iterate through the string
    // capitalize the first word and the first letter of each word
    // except the lowercase ones.
    let resultArray = [];
    for (let i = 0; i < word.length; i++){
      // this checks if the letter is lowercase
       if (i == 0) {
        resultArray.push(this.capitalize(word[i]));
      } else if ((lowercaseArray.includes(word[i]))){
        resultArray.push(word[i]);
      } else {
        resultArray.push(this.capitalize(word[i]));
      }
    }
      return resultArray.join(' ');
  }
}