class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let untouched = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = string.split(" ");
    let firstWord = this.capitalize(stringArray[0]);
    let collection = stringArray.slice(1).map( function(word) {
      if (!untouched.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    }.bind(this))
    collection.unshift(firstWord);
    return collection.join(" ");
  }

}