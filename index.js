class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let stringArray = string.split(" ");
    let newArray = [];
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === "a" || stringArray[i] === "the" || stringArray[i] === "an" || stringArray[i] === "but" || stringArray[i] === "of" || stringArray[i] === "and" || stringArray[i] === "for" || stringArray[i] === "at" || stringArray[i] === "by" || stringArray[i] === "from"){

          if (i === 0 ){
            newArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
          } else {
            newArray[i] = stringArray[i];
          }

      } else {
        console.log("capitalize this", stringArray[i])
        newArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
      }
    }
    return newArray.join(" ");
  }
  //add static methods here
}
