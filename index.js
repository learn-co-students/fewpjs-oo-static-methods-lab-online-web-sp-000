class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const bannedWords = [
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
    const words = string.split(" ");

    let capitalizedWords = words.map((word) => {
      return bannedWords.includes(word) ? word : this.capitalize(word);
    });

    capitalizedWords[0] = this.capitalize(capitalizedWords[0]);

    return capitalizedWords.join(" ");
  }
}
