class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^0-9a-z-' ]/gi, '')
  }
  static titleize(string){
    const skipwords = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'])
    let words = string.split(' ')
    for (let i=0; i<words.length; i++){
      if (!skipwords.has(words[i].toLowerCase()) || i==0){
        words[i] = this.capitalize(words[i])
      }
      // console.log(words.join(' '))
    }
      return(words.join(' '))
    
  }
}