class Formatter {
  static capitalize(string){
    return string.slice(0, 1).toUpperCase().concat(string.slice(1,))
  }
  static sanitize(string){
    const regex = new RegExp(/[^\s\w'-]/, 'gm');
    return string.replace(regex, '')
  }
  static titleize(string){
    const regex = new RegExp('^(a|an|but|the|of|and|for|at|by|from)$', 'gm')
    let stringArray = string.split(' ')
    let capArray = new Array
    capArray.push(Formatter.capitalize(stringArray.shift())) //Takes the first character and puts if capitalized in caparry
    for(let word of stringArray){
      if(!word.match(regex)){
        capArray.push(Formatter.capitalize(word))
      }
       else {
        capArray.push(word)
      }
    }
    return capArray.join(' ')
  }
}
