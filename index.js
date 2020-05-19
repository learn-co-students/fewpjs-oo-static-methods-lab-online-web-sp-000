class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let splitString = string.split(' ')
    let title = splitString.map(e => {if (e != 'the' && e != 'and' && e != 'a' && e != 'an' && e != 'of' && e != 'for' && e != 'at' && e != 'by' && e != 'from' && e != 'but') {return e.charAt(0).toUpperCase() + e.slice(1)} else {return e}}).join(' ')
    let finalTitle = title.split(' ')
    finalTitle[0] = finalTitle[0].charAt(0).toUpperCase() + finalTitle[0].slice(1)
    return finalTitle.join(' ')
  }
}