class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)//capitalize first letter
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\-\' ]+/g,'') //removes all non-alphanumeric characters except for dashes, single quotes and spaces
  }
  static titleize(string) {
    const array = ["of", "the", "a", "an", "and", "but", "for", "at", "by", "from"]
    //capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.

    return string.split(" ").map(function(word, index) {
      if (index !== 0 && array.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }.bind(this)).join(" ")
  }
}
