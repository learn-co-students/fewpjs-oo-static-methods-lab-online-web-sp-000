class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let array = string.split(' ');
    let firstWord = this.capitalize(array[0]);
    let newArray = [];

    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const word of array.slice(1)) {

      if (word.match( new RegExp("\\b(" + exceptions.join('|') + ")\\b", "ig") )) {
        newArray.push(word);
      } else {
        newArray.push(this.capitalize(word));
      }
    }

    newArray.unshift(firstWord);

    return newArray.join(' ');
  }
}