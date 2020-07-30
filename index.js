class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '') 
  }

  static titleize(string) {
    let arr = string.split(" ")
    arr.splice(0, 1, this.capitalize(arr[0]))
    for (let i = 1; i < arr.length; i++) {
      if (!arr[i].match(/^(a|the|an|at|but|of|and|by|for|from)$/g)) {
        arr.splice(i, 1, this.capitalize(arr[i]));
      }
    }
    return arr.join(" ")
  }
}