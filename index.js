class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static titleize(string) {
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    string = string.split();
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        this.capitalize(string[i]);
      } else if (!words.some((word) => word === string[i])) {
        this.capitalize(string[i]);
      }
    }
    return string.join(' ');
  }

  static sanitize(string) {
    string = string.replace(/[^a-z0-9]/i, "");
    return string;
  }
}