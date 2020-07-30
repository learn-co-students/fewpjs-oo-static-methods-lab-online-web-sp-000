class Formatter {
  static capitalize(str){
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }
  static sanitize( str ) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  static titleize(title){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const titleArr = title.split(' ');
    const modified = titleArr.slice(1).map(word => (exceptions.some(element => element === word)) ? word : this.capitalize(word));
    modified.unshift(this.capitalize(titleArr[0])); // Add back first word
    return modified.join(" ");
  }
}