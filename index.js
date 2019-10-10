class Formatter {
  //add static methods here

  static capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  static sanitize(input) {
    return input.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(input) {
    let returnString = "";
    let inputArray = input.split(" ");
    for (let i = 0; i < inputArray.length; i++){
      if (i === 0){
        returnString += `${this.capitalize(inputArray[i])}`
      } else {
        switch (inputArray[i]) {
          case "the":
          case "a":
          case "an":
          case "but":
          case "of":
          case "and":
          case "for":
          case "at":
          case "by":
          case "from":
            returnString += `${inputArray[i]}`;
            break;
          default:
            returnString += `${this.capitalize(inputArray[i])}`;
        }
      }
      if (i !== inputArray.length - 1){
        returnString += " ";
      }
    }
    returnString.slice(-1);
    return returnString;
  }
}