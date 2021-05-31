class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(string) {
    let result = [];
    let except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let stringArray = string.split(" ");
    result.push(this.capitalize(stringArray[0]));
    stringArray.slice(1).forEach((x) => {
      if (except.includes(x)) {
        result.push(x);
      } else {
        result.push(this.capitalize(x));
      }
    });
    return result.join(" ");
  }
}