class Formatter {

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(str) {
    let arr = str.split(' ');

    const newArr = [];

    for (const word of arr) {
      const loweredWord = word.toLowerCase()
      switch (loweredWord) {
        case 'the':
        case 'a':
        case 'an':
        case 'but':
        case 'of':
        case 'and':
        case 'for':
        case 'at':
        case 'by':
        case 'from':
          newArr.push(loweredWord);
          break;
        default:
          const thisWord = loweredWord.charAt(0).toUpperCase() + loweredWord.slice(1);
          newArr.push(thisWord);
          break;
      }
    }
    const newStr = newArr.join(' ');
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
}
