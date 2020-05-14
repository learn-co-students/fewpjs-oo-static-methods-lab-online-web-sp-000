class Formatter {
  static capitalize(string) {
    // capitalizes first word
    let newStr = string.slice();
    let newStrArray = newStr.split('');
    newStrArray[0] = newStrArray[0].toUpperCase();

    return newStrArray.join('');
  }

  static sanitize(string) {
    // removes all non-alphanumeric characters except for dashes, single quotes and spaces
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let nonCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let wordArray = string.slice().split(' ');
    let returnStringArray = [];
    //capitalizes all words in a sentence except those in nonCapWords Array.
    //always capitalizes the first word.
    for (let i = 0; i<wordArray.length; i++) {
      if (i === 0) {
        returnStringArray.push(Formatter.capitalize(wordArray[i]));
      } else {
        if (!(nonCapWords.includes(wordArray[i]))) {
          returnStringArray.push(Formatter.capitalize(wordArray[i]));
        } else {
          returnStringArray.push(wordArray[i]);
        }
      }
    }
    return returnStringArray.join(' ');
  }
}

Formatter.titleize('a tale of two cities');