class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s-']+/g, '');
  }

  static titleize(string) {
    return string.split(" ").map(function(word, index){
    if (!word.match(/^the$|^[a]$|an|but|of|and|for|at|by|from/) || index == 0){
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }}).join(" ")
  }
}