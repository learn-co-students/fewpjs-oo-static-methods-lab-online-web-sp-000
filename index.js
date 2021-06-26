class Formatter {
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(sentence){
    let dontCap = ['a', 'the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  let array = [];
  let parts = sentence.split(' ');
  for(let s of parts){
    if(s == parts[0]){
      array.push(this.capitalize(s));
    } else {
      if(dontCap.includes(s)){
        array.push(s);
      } else {
        array.push(this.capitalize(s));
      }
    }

}
return array.join(' ');
  }

}