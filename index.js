class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let stringArray = string.split(" ");
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newStringArray;

    for(let e=0; e < stringArray.length; e++) {
      if(!exceptions.includes(stringArray[e]))
        { stringArray[e] = this.capitalize(stringArray[e]);
        }
      }
      newStringArray = stringArray.join(" ");
      return newStringArray[0].toUpperCase() + newStringArray.slice(1)
  }
}