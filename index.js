class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9áéíóúñü \.,_'-]/gim,"");
  }

  static titleize(string) {
    const subWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(' ');

    arr.unshift(Formatter.capitalize(arr.shift()));

    const newArray = arr.map(function(word){
      if (subWords.includes(word)) {
        return word;
      } else {
        return Formatter.capitalize(word);
      }
    });
    let newString = newArray.join(' ');
    return newString;
  }
}