class Formatter {
  
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]/g, "");
  }

  static titleize(string){
    const SKIP_WORDS = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']

    let titleizedString = string.split(" ").map( x=> {
      if(SKIP_WORDS.indexOf(x.toLowerCase()) === -1){
        return Formatter.capitalize(x)
      } else {
        return x;
      }
    });
    titleizedString[0] = Formatter.capitalize(titleizedString[0])
    return titleizedString.join(" ")
  }
}