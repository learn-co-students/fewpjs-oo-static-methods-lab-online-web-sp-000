class Formatter {
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9 '-]+/g, '');
    }

    static titleize(string) {
      let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let results = []
      let arrayOfWords = string.split(' ')
      for (let i = 0; i < arrayOfWords.length; i++) {
        if (i === 0) {
          results.push(this.capitalize(arrayOfWords[i]))
        } else {
          if (exceptions.includes(arrayOfWords[i])) {
            results.push(arrayOfWords[i])
          } else {
            results.push(this.capitalize(arrayOfWords[i]))
          }
        }
      }
      return results.join(' ')
    }
}