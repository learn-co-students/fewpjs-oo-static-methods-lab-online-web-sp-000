class Formatter {
  
  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'] 
    let wordArray = string.split(' ');
    let resultArray = []
    for (let index = 0; index < wordArray.length; index++) {
      if (index == 0) {
        resultArray.push(this.capitalize(wordArray[index]))
      } else {
        if (exceptions.includes(wordArray[index])) {
          resultArray.push(wordArray[index])
        } else {
          resultArray.push(this.capitalize(wordArray[index]))
        }
      }
      
    }
    return resultArray.join(" ");
  }

}