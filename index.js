class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, '');
  }

  static titleize(string) {
    let lowercase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let capString = string.charAt(0).toUpperCase() + string.slice(1);
    let arrayOfWords = capString.split(" ");
    let newArrayOfWords = arrayOfWords.map(function(word) {
      if (lowercase.indexOf(word) === -1) {
        return word.charAt(0).toUpperCase() + word.slice(1); 
      } else {
        return word
      }
    })
    return newArrayOfWords.join(" ");
  }

}