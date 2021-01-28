class Formatter {
  static capitalize(string) {
    return string = string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(sentence) {
    let solution = []
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newSent = sentence.split(' ')
    newSent[0] = newSent[0][0].toUpperCase() + newSent[0].slice(1)
    for (let ele of newSent) {
      if (array.includes(ele)) {
        solution.push(ele)
      }
      else {
        ele = ele[0].toUpperCase() + ele.slice(1)
        solution.push(ele)
      }
    }
    return solution.join(' ')
  }
}
