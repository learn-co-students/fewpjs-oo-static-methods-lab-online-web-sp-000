class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }


  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'] // Our array of words that will not be capitalized
    let newString = string.split(' ') // Take the entered string and put each word as an element in newString array
    let newSentence = [] // Will contain our modified string after we sort through it
    
    for (let i = 0; i < newString.length; i++)
      if(i === 0) { 
        newSentence.push(this.capitalize(newString[i])) // We capitalize the very first word in the array
      } 
      else if (exceptions.includes(newString[i])) { // Then, if the element equals an element in our exceptions array
        newSentence.push(newString[i]) // we push it in uncapitalized
      } else { // Otherwise, if it isn't an exception...
        newSentence.push(this.capitalize(newString[i])) // Use our static function to capitalize it then push it into the array
    }
      return newSentence.join(" ") // We then 'join' these elements together to form our modified string
  } 
}