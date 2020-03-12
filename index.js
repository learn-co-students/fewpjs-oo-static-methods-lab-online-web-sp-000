class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g,'')
  }

  static titleize(string) {
    let array = []
      string.split(" ").forEach(word => {
        let index = string.indexOf(word)
        if (index === 0) {
          let x = word.charAt(0).toUpperCase() + word.slice(1)
          array.push(x)
        } else if 
         (word == 'the' || word == 'a' || word == 'an' || word == 'but' || word == 'of' || word == 'and' || word == 'for' || word == 'at' || word == 'by' || word == 'from') {
          array.push(word)
        } else {
          let x = word.charAt(0).toUpperCase() + word.slice(1)
         array.push(x)
        }
     })
     return array.join(" ")
  }

}