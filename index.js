class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newString = string.split(' ');
    newString[0] = this.capitalize(newString[0]);
    for (let i = 1; i < newString.length; i++) {
      if (!exceptions.find(element => element === newString[i])) {
        newString[i] = this.capitalize(newString[i]);
      }
    }
    return newString.join(' ');
  } 
}  
