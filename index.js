class Formatter {
  //add static methods here
  static capitalize(str) {
     var reg = /(\b[a-z](?!\s))/g
     return str.replace(reg, (match) => match.toUpperCase())
  };

  static sanitize(str) {
    // removes non-alphanumeric characters except for dash, single quote, and space
    var reg = /[$@!#^*({]/gi
      return str.replace(reg,'')
  };

  static titleize(str) {
    // capitalizes all words in a stentence xcept 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
      // always capitalizes the first word
      let array = str.split(' ')
      //let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let newArray = []
      let upcasearray = array.map(word => {
        if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
          newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
        } else {
          newArray.push(word)
        }
      })
      return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
  };
}
