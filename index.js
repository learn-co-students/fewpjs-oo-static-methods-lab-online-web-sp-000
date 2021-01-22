class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-z0-9\ '-]/gi,'');
  }

  static titleize(str) {
    const nonUpper = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return str.split(" ").map((word, i)=> nonUpper.includes(word) && i !== 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
}