class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const array1 = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const array2 = [];
    const array3 = string.split(' ');
    for (let i = 0; i < array3.length; i++) {
      if (!array1.includes(array3[i])) {
        array2.push(this.capitalize(array3[i]))
      } else {
        array2.push(array3[i])
      }
    }
    return Formatter.capitalize(array2.join(' '))
  }
}