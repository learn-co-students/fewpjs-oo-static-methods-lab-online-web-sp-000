class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    const skipWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let titleizedString = string.split(" ").map( x => {
      if(skipWords.indexOf(x.toLowerCase()) === -1){
        return Formatter.capitalize(x)
      } else {
        return x;
      }
    });
    titleizedString[0] =Formatter.capitalize(titleizedString[0])
    return titleizedString.join(" ")
  }
}