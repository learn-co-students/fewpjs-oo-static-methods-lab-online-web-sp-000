class Formatter {
  //add static methods here
  static capitalize(string) {
    var reg = /(\b[a-z](?!\s))/g
    return string.replace(reg, (match) => match.toUpperCase())
  };

  static sanitize(string) {
    var reg = /[$@!#^*({]/gi
      return string.replace(reg,'')
  };

  static titleize(string) {
    let array = string.split(' ')
      let newArray = []
      let upcasearray = array.map(word => {
        if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
          newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
        } else {
          newArray.push(word)
        }
      })
      return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
  }

}