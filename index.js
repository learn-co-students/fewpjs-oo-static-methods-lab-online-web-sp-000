class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let noCapitals = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let capitalized = [];
    let check = []
    let stringArray = string.split(" ");
    stringArray[0].charAt(0).toUpperCase() + stringArray[0]
    for(let i = 0; i<stringArray.length; i++){
      if(i === 0){
        capitalized.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1))
      } else if (noCapitals.includes(stringArray[i])){
        capitalized.push(stringArray[i])
      }else{
      capitalized.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1))

    }
    
  }
    return capitalized.join(" ");
  }

}