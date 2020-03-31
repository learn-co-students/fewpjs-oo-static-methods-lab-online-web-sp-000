class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let newString = ""
    let noTitle = ["the", "from", "at", "by", "a", "an", "but", "of", "and", "for"]
    let title = string.split(" ")

    title.forEach(word => {
      if (title.indexOf(word) === 0){
        newString += word.charAt(0).toUpperCase() + word.slice(1)
      }else if (noTitle.includes(word)){
        newString += ` ${word}`
      }else{
        newString += ` ${word.charAt(0).toUpperCase() + word.slice(1)}`
      }
    })
    return newString
  }
}
