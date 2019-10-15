class Formatter {
  //add static methods here
  static capitalize(s) {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    return s;
  }
  
  static sanitize(s) {
    return s.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  
  static titleize(s) {
    const lowers = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = s.split(' ');
    words[0] = this.capitalize(words[0]);
    for (let i = 1; i < words.length; i++) {
      if (!lowers.find(w => w === words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
}