class Formatter {
  //add static methods here
  static capitalize(givenString){
    return givenString.charAt(0).toUpperCase() + givenString.slice(1)
  }

  static sanitize(givenString){
    const sanitizedString = givenString.replace(/[^\w\s,'-]/g, '')
    return sanitizedString
  }

  static titleize(givenString){

    const untitleized = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    function titleizeWord(word){
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    } 

    const result = [];
    givenString.split(" ").forEach(function(w) {
        if (untitleized.includes(w)){
          result.push(w)
        } else {
          result.push(titleizeWord(w))
        }
    });

    const titleizedString = result.join(" ")

    return titleizedString.charAt(0).toUpperCase() + titleizedString.slice(1)

  }

}