class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    let except = [ "the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from" ];
    let solution = [];
    let newArray = sentence.split(" ");
    for (let n = 0; n < newArray.length; n++) {
      if (n == 0) {
        solution.push(this.capitalize(newArray[n]))
      } else {
        if (except.includes(newArray[n])) {
        solution.push(newArray[n])
      } else {
        solution.push(this.capitalize(newArray[n]))
        }
      }
    }
    return solution.join(" ")
  }
}