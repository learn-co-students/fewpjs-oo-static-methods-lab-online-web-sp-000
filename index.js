class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9 '-]/g, "")
  }

  static titleize(string) {
    let lowercaseWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let split = string.split(" ")
    let newArray = []

    split.forEach(word => {
      if (lowercaseWords.includes(word)) {
        newArray.push(word)
      } else {
        newArray.push(this.capitalize(word))
      }
    })
    newArray[0] = this.capitalize(newArray[0])
    return newArray.join(" ")
  }
}