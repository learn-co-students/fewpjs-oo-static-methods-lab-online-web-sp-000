class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let str = [];
    let excluded = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        str.push(this.capitalize(array[i]))
      }
      else {
        if ( excluded.includes(array[i])) {
          str.push(array[i])
        } else {
          str.push(this.capitalize(array[i]))
        }
      }
    }
    return str.join(" ");
  }
}
