class Formatter {
  //add static methods here

  static capitalize(str) {
    str = str.split('');
    let a = str.splice(0,1)[0].toUpperCase();
    str.splice(0, 0, a);
    return str.join('');
    // return result;
  }
  static sanitize(str) {
    // console.log(str);
    var b = str.replace(/[^a-z0-9\ '-]/gi,'');
    // console.log(b);
    return b;
  }
  // Formatter.titleize( "chicken soup with rice and a few other songs" )
  static titleize(str) {
    const notThese = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    str = str.split(' ');
    let firstWord = this.capitalize(str[0]);
    for (let i = 1; i < str.length; i++) {
      if (!notThese.includes(str[i])) {
        str.splice(i,1,this.capitalize(str[i]));
        // console.log(str);
      }
    }
    // console.log(firstWord);
    // console.log(str);
    str.splice(0,1,firstWord);
    // console.log(str);
    return str.join(' ');
  }
}