class Formatter {
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ");
    let title = [];
    let articles = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        title.push(this.capitalize(words[i]));
      } else if (articles.includes(words[i])) {
        title.push(words[i])
      } else {
        title.push(this.capitalize(words[i]))
      }
    }
    return title.join(" ");
  }
}