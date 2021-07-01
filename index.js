class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // takes in string and removes all non-alphanumeric characters 
  // except for dashes, single quotes and spaces
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let arrOfWords = string.split(" ")
    let titleizedArr = arrOfWords.map(word => {
      if (exception.includes(word) && word !== arrOfWords[0]) {
        return word 
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    }); 
    return titleizedArr.join(" ");
  }
}

//Formatter.capitalize();
//Formatter.sanitize();
//Formatter.titleize();