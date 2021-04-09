class Formatter {
  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(input) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let title = [];
    let wordArray = input.split(' ');

    for (let n = 0; n < wordArray.length; n++) {
      if (n == 0) {
        title.push(this.capitalize(wordArray[n]))
      } else if (exceptions.includes(wordArray[n])) {
        title.push(wordArray[n])
      } else {
        title.push(this.capitalize(wordArray[n]))
      }
    }
    return title.join(' ');
  }
}