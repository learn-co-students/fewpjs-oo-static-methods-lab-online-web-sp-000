class Formatter {
  //add static methods here
  static capitalize(s) {
    return s.slice(0,1).toUpperCase() + s.slice(1)
  }
  static sanitize(s) {
    return s.replace(/[^0-9A-Za-z '-]/g, "")
  }
  static titleize(s) {
    let words = s.split(" ");
    let ignored = ['a','an','but','of','and','for','at','by','from','the']
    return this.capitalize(words.map((w) => {
      return !(ignored.includes(w)) ? this.capitalize(w) : w;
    }).join(" "))
  }
}