class Formatter {
  //add static methods here
  static capitalize(givenString){
    return givenString.charAt(0).toUpperCase() + givenString.slice(1)
  }

  static sanitize(givenString){
    const sanitizedString = givenString.replace(/[^\w\s,'-]/gi, '')
    return sanitizedString
  }

  static titleize(givenString){

    function titleize(givenString) {
      if(!givenString.split) return givenString;
      var _titleizeWord = function(string) {
              return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
          },
          result = [];
      givenString.split(" ").forEach(function(w) {
          result.push(_titleizeWord(w));
      });
      return result.join(" ");
  }    

  }
}