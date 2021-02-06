class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1); 
  }

  static sanitize(str) {
    const regex = /[^a-zA-Z0-9'\s-]/g;
    return str.replace(regex, ''); 
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']; 
    const words = str.split(' '); 
    const newWords = []; 
    for (let i = 0; i < words.length; i++) {
      let word = words[i]; 
      if (i == 0 || !exceptions.includes(word)) {
        newWords.push(this.capitalize(word)); 
      }
      else {
        newWords.push(word)
      }
    }
    return newWords.join(' '); 
  }
}