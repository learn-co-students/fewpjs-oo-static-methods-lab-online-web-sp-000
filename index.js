class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(str) {
    return this.capitalize(str.split(" ").map(word => word.match(/\b(the|a|an|but|of|at|and|for|by|from)\b/g) ? word : this.capitalize(word)).join(" "));
  }
}
