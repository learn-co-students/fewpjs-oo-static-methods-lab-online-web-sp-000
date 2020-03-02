class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z-\s']/g, '')
  }

  static titleize(words) {
    let results = words.split(" ").map( ele => { 
      if (ele === "the" || ele === "a" || ele === "an" || ele === "but" || ele === "of" ||ele === "and" || ele === "for" || ele === "at" || ele === "by" || ele === "from") {
        return ele
      } else {
        return ele[0].toUpperCase() + ele.slice(1);
      }
    }).join(" ");
    return results[0].toUpperCase() + results.slice(1)
  }

}