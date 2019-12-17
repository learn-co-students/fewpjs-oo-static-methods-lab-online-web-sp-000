class Formatter {
  //add static methods here
  static capitalize(string) {
    let array = string.split("");
    array[0] = array[0].toUpperCase();
    return array.join("")
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    let array = string.split(" ")
    return array.map(word => word.replace(/[^A-Za-z0-9-']+/g, '')).join(" ")
  }

  static titleize(string) {
    let array = string.split(" ");
    // console.log(array)
    let wordsArray= ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArray = array.map(word => {
      if (wordsArray.includes(word) && array.indexOf(word) === 0) {
        return this.capitalize(word)
      } else if (wordsArray.includes(word)){
        return word;
      } else {
        return this.capitalize(word);
      }
    })
    // console.log(newArray)
    console.log(newArray.join(" "))
    return newArray.join(" ")
  }
}


// You are going to write three static methods in the Formatter class. Write your code in the index.js file. Let the tests guide you through the process.
//
// Write a method static capitalize that takes in a string and capitalizes the first letter.
// Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
// Conclusion
