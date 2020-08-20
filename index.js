class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^-, A-Za-z0-9-']+/g, '');
  }

  //"Maurice a an but of and for at by from end"
  static titleize(string) {
    let splitted = string.split(" ")
    let sliced = splitted.slice(1)
    let result = [];
    if (splitted[0] !== splitted[0].charAt(0).toUpperCase()) {
      result.push(splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1))
    } else {
      result.push(splitted[0] + splitted[0].slice(1))
    }
    for (var i = 0; i < sliced.length; i++) {
      if (sliced[i] == "the" || sliced[i] == "a" || sliced[i] == "an" || sliced[i] == "but" || sliced[i] == "of" || sliced[i] == "and" || sliced[i] == "for" || sliced[i] == "at" || sliced[i] == "by" || sliced[i] == "from"){
        result.push(sliced[i])
      } else {
        result.push(sliced[i].charAt(0).toUpperCase() + sliced[i].slice(1))
      }
    }
    return result.join(" ");
  }
}