class Formatter {
  //add static methods here
  static capitalize(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1)
  }

  static sanitize(inputString) {
    return inputString.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(inputString) {
    const noCap = ['the', 'a', 'an', 'but', 'of', 'and','for', 'at', 'by', 'from']
    const inputStringArray = inputString.split(' ');
    return inputStringArray.map((ele, index) => {
      if (index === 0) {
        return this.capitalize(ele)
      } else if (noCap.find(e => e === ele)) {
        return ele
      } else {
        return this.capitalize(ele)
      }
    }).join(' ')

  }

}