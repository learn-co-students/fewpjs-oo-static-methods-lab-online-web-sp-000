class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    const excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let words = this.sanitize(string).split(" ");
    let newWords = [];
    words.forEach(function (word, index) {
      if (index === 0 || !excludedWords.includes(word)) {
        console.log(`word is ${word}`);
        newWords.push(Formatter.capitalize(word));
      } else {
        newWords.push(word);
      }
    });
    return newWords.join(" ");
  }
}
