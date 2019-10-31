class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let answer = [];

    let newArr = string.split(' ')

    for (let i = 0; i < newArr.length; i++) {
      
      if (i == 0) {
        answer.push(this.capitalize(newArr[i]))

      } else {
        if (words.includes(newArr[i])) {
          answer.push(newArr[i])
        
        } else {
          answer.push(this.capitalize(newArr[i]))
        }
      }

    }
    return answer.join(" ");
  }
}
