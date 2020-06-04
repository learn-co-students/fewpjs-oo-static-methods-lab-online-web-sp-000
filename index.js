class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let words = string.split(' ');
    let otherWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    for (let i = 0; i < words.length; i++) {
      if(i==0) {
        words[i] = Formatter.capitalize(words[i]);
      } else if (!otherWords.some(w => w === words[i])) {
        words[i] = Formatter.capitalize(words[i]);
      } else {
        continue;
      }
    }

    return words.join(' ');
  }
}
