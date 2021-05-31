class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.'-]/gim, "");
    return str.trim();
  }

  static titleize(str) {
    let words = str.split(' ')
    const ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = words.map(word => {
      if (!ignore.some(e => e === word)) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    })
    let final = Formatter.capitalize(arr.join(' '))
    return final
  }
}