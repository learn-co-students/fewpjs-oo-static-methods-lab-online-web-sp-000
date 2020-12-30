class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    return Formatter.capitalize(string.split(" ").map((e) => {
      switch(e){
        case 'the':
          return e;
          break;
        case 'a':
          return e;
          break;
        case 'an':
          return e;
          break;
        case 'but':
          return e;
          break;
        case 'of':
          return e;
          break;
        case 'and':
          return e;
          break;
        case 'for':
          return e;
          break;
        case 'at':
          return e;
          break;
        case 'by':
          return e;
          break;
        case 'from':
          return e;
          break;
        default: 
          return Formatter.capitalize(e);
          break;
      }
    }).join(" "))
  }
}