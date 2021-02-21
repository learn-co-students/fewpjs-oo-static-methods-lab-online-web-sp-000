class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.substring(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-\s-']+/g, '')
  }
  static titleize(string){
    return Formatter.capitalize(string.split(" ")
    .map(function(str){
      if (!str.match(/^the$|^[a]$|an|but|of|and|for|at|by|from/)){
        return Formatter.capitalize(str)
      } else {
        return str
      }}).join(" "))
  }
}
