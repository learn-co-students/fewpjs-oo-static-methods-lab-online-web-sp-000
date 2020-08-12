class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^\w\s0-9-']/gi, '')
  }

  static titleize(str) {
    const arr = str.split(" ");
    const skip = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    for (let i = 0; i < arr.length; i++) {
      if(i === 0 || !skip.includes(arr[i])) {
        arr[i] = this.capitalize(arr[i])
      }
    }
    return arr.join(" ");
  }
}