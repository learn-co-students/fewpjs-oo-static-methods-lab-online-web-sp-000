class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let titleStr = [];
    let strArray = str.split(" ");
    for (let i=0; i < strArray.length; i++) {
      if (i === 0) {
        titleStr.push(this.capitalize(strArray[i]));
      } else {
        if (exceptions.includes(strArray[i])) {
          titleStr.push(strArray[i]);
        } else {
          titleStr.push(this.capitalize(strArray[i]));
        }
      }
    } return titleStr.join(' ');
  }

}