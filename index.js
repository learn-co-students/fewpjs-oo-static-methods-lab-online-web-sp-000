class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  };

  static titleize(string){
    return Formatter.capitalize(string.split(" ").map(function(x) {
      if(!((x == "the") || (x == "a") || (x == "an") || (x == "but") ||  (x == "for") || (x == "at") || (x == "by") || (x == "from") || (x == "and") || (x == "of")))
      {
        return Formatter.capitalize(x)
      }
      else
      {
        return x
      }
    }).join(" "))
  };
}