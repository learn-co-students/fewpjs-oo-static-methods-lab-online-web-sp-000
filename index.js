class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let stringArr = string.split(' ');
    let newStringArr = [stringArr[0].charAt(0).toUpperCase() + stringArr[0].slice(1)];
    stringArr = stringArr.slice(1)
    for (const word of stringArr) {
      if (noCap.includes(word)) {
        newStringArr.push(word)
      } else {
        newStringArr.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    }
    return newStringArr.join(' ')
  }
}