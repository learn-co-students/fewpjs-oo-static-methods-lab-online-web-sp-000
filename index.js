class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9 '-]/g,"");
  }

  static titleize(string) {
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let array = string.split(' ');

    let newArray = array.map((word) => {
      if (exception.includes(word) && array.indexOf(word) === 0) {
        return this.capitalize(word);
      } else if (exception.includes(word)) {
        return word;
      } else {
        return this.capitalize(this.sanitize(word))
      }
    })
    return newArray.join(" ")
  }
}