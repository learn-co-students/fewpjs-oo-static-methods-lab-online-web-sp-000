class Formatter {
  //add static methods here


  static capitalize(string) {
    let newString = string.slice(0,1).toUpperCase() + string.slice(1)
    return newString;
  }

  static sanitize(string) {
    // Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');

  }

  static titleize(string) {
    console.log(this)
    let arr = string.split(" ");
    arr[0] = this.capitalize(arr[0])
    let noList =  ["the", "a", "an", "but", "of", "and", "for", "at", "by",  "from"]
    arr.forEach( function(word, index, array) {
      if (noList.indexOf(word) === -1 ) {
        array[index] = Formatter.capitalize(word);
        //if u update the word variable, the array stays the same!!!!!
        //i think its made into a acopy
      }
    } )

    return arr.join(" ");
  }

  anInstanceMethod() {
    console.log(this)
  }
}