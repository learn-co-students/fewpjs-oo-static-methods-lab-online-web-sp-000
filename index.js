
// 1.  Write a method `static capitalize` that takes in a string and capitalizes the
// first letter.
// 2.  Write a method `static sanitize` that takes in a string and removes all
// non-alphanumeric characters except for dashes, single quotes and spaces.
// 3.  Write a method `static titleize` that takes in a string and capitalizes all
// words in a sentence except the, a, an, but, of, and, for, at, by, and from; and
// always capitalizes the first word.

class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let array = string.split(" ");
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let results = [];
    for (let i = 0; i < array.length; i++){
      if (i ===0){
        results.push(this.capitalize(array[i]));
      }
      else if (except.includes(array[i])) {
        results.push(array[i]);
      }
      else {
        results.push(this.capitalize(array[i]));
      }
     
    }
    return results.join(" ");
  }
}