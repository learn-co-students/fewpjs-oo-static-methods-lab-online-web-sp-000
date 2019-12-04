class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  };

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g,  '');
  };

  static titleize(str) {
    const titleizedStr = [];
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const splitStr = str.split(' ');
      titleizedStr.push(this.capitalize(splitStr[0]));
      for(const word of splitStr.slice(1)) {
        if(!exceptions.find(exception => exception === word)) { titleizedStr.push(this.capitalize(word)) } else { titleizedStr.push(word) };
      };
    return titleizedStr.join(' ');
  };

}
