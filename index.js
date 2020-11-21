class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  };

  static titleize(string) {
    let stringArray = string.split(' ');
    stringArray[0] = this.capitalize(stringArray[0]);
    let titleizeArray = stringArray.map(function(word) {
      switch (word) {
        case stringArray[0]:;
        case "a":;
        case "an":;
        case "but":;
        case "of":;
        case "and":;
        case "for":;
        case "at":;
        case "by":;
        case "the":;
        case "from":
          return word;
          break;
        default:
          return this.capitalize(word);
      }
    }.bind(this));
    return titleizeArray.join(' ');
  };

}