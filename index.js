class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-'-' ']+/g, "");
  }
  static titleize (string) {
    let doNot = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return string.split(" ").map((word, index) => {
      if ((!doNot.includes(word)) || (index === 0)){
        return this.capitalize(word)
      }
      else {
        return word
      }
    }).join(" ");
  }
}