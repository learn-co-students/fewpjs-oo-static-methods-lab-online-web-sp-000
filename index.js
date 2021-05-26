class Formatter {
  //add static methods here

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(str) {
      let exceptWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let newString = []
      let arrayOfWords = str.split(" ") 

        for (let i = 0; i < arrayOfWords.length; i++) {
            if (i == 0) {
                newString.push(this.capitalize(arrayOfWords[i]))
            } else {
                if (exceptWords.includes(arrayOfWords[i])) {
                 newString.push(arrayOfWords[i])
            } else {
            newString.push(this.capitalize(arrayOfWords[i]))
        }
    }
}
    return newString.join(" ")
    }
}
