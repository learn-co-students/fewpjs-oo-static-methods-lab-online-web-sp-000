class Formatter {
  //add static methods here

  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1)

  }

  static sanitize (string){
    return string.replace(/[^A-Za-z0-9- '-]+/g, '');
  }

  static titleize (string){
    let lowercaseWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newArray= string.split(" ")
    let title = []
    newArray.forEach(word => {
      if (lowercaseWords.includes(word)) {
        title.push(word)
      } else {
        title.push(this.capitalize(word))
      }
    })
    title[0] = this.capitalize(newArray[0])
    return title.join(" ")
  }
}