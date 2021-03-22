class Formatter {
  static capitalize(str) {
    return ((str[0].toUpperCase()) + str.slice(1))
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'" "]+/g, '');
  }

  static titleize(str) {
    let forbidden = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let newsent = []
    let caps = str.split(" ")
    for (let i=0; i < caps.length; i++) {
      if (!forbidden.includes(caps[i])) {
        let word = caps[i][0].toUpperCase() + caps[i].slice(1);
        newsent.push(word)
      } else if (i == 0) {
        let word = caps[i][0].toUpperCase() + caps[i].slice(1);
        newsent.push(word)
      } else {
        newsent.push(caps[i])
      }
    }
    return newsent.join(" ")
  }
}