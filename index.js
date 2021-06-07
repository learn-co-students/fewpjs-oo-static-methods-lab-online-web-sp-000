class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^-' A-Za-z0-9]+/g, "");
  }

  static titleize(string) {
    let arr = [];
    let excludeWords = [
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
    arr = string.split(" ");
    return arr
      .map((word, i) => {
        console.log(i);
        return excludeWords.includes(word) && i > 0 //checking if i > 0 because if only one of these conditions is true because i is not > 0 that means the excluded word was the first word and because of the false ternary we capitalize that word right?
          ? [word]
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
