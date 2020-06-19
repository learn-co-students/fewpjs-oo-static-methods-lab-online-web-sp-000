class Formatter {
  //add static methods here

  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
  }

  static sanitize(name) {
    return name.replace(/[^A-Za-z-'\s0-9]/g, '');
  }

  static titleize(string) {
    let words = string.split(' ');
    let title = Formatter.capitalize(words[0]);
    for(let i = 1; i < words.length; i++) {
      if (words[i] === 'a' || words[i] === 'an' || words[i] === 'or' || words[i] === 'but' || words[i] === 'of' || words[i] === 'the' || words[i] === 'and' || words[i] === 'for' || words[i] === 'at' || words[i] === 'by' || words[i] === 'from') {
        title += ` ${words[i]}`;
      } else {
        title += ` ${Formatter.capitalize(words[i])}`;
      }
    }
    return title;
  }
}