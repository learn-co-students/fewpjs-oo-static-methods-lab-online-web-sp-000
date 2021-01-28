class Formatter {
  
  static capitalize(string) {
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase())
  }

  static sanitize(str) {
     return str.replace(/[^\w|\s|'|-]+/g, '');
  }

  static titleize(str) {
    let noCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let res = [];
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
      switch (i) {
        case 0:
          res.push(this.capitalize(arr[0]));
          break;
      
        default:
          if (noCaps.includes(arr[i])) {
            res.push(arr[i])
          }
          else {
            res.push(this.capitalize(arr[i]))
          }
          break;
      }
    }
    return res.join(' ');
  }
}