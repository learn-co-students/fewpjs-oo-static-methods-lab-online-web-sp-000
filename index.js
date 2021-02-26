class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static titleize(string) {
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    string = string.split(' ');
    const result = [];
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(string[i]));
      } else if (words.includes(string[i])) {
        result.push(string[i]);
      } else {
        result.push(this.capitalize(string[i]));
      }
    }
    return result.join(' ');
  }

  static sanitize(string) {
    return string.replace( /[^a-z0-9 '-]/gi, '' )
  }
}