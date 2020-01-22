class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(str) {
    str = this.capitalize(str);
    let wordArray = str.split(" ");
    let titleized = wordArray.map(word => {
      switch(word) {
        case 'an':
        case 'the':
        case 'a':
        case 'but':
        case 'of':
        case 'and':
        case 'for':
        case 'at':
        case 'by':
        case 'from':
          return word;
        default: 
        return this.capitalize(word);
      }
    })
    return titleized.join(" ")
  }
}