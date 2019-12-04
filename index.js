class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  };


  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g,  '');
  };

  static titleize(string) {
    const titleizedString = [];
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const splitString = string.split(' ');
    titleizedString.push(this.capitalize(splitString[0]));
    for(const word of splitString.slice(1)) {
      if(!exceptions.find(exception => exception === word)) { titleizedString.push(this.capitalize(word)) } else { titleizedString.push(word) };
    };
    return titleizedString.join(' ');
  }

};