class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
   return str.replace(/[^a-zA-Z\s\d'-]/g,'');
  }

  static titleize(str){
    return str.split(" ").map(function(word, index){
      if ((word != 'the' && word != 'a' && word != 'an' && word != 'but' && word != 'of' && word != 'and' && word != 'for' && word != 'at' && word != 'by' && word != 'from') || index == 0){
    return  word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word
    }}).join(" ")
  }
}