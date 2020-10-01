class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[&\/\\#,+()$~%.":*?<>^{}!@]/g, '');
  }

  static titleize(string){
    const except = ["of", "the", "a", "an", "and", "but", "for", "at", "by", "from"]

    return string.split(" ").map(function(word, index) {
      if (index !== 0 && except.includes(word)) {
            return word
          } else {
            return this.capitalize(word)
          }
        }.bind(this)).join(" ")
    }
}
