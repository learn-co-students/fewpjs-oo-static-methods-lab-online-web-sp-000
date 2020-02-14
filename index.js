class Formatter {
  static capitalize(str){
    return str[0].toUpperCase() + str.substring(1); 
  }
  static sanitize(str){
    let replacement = str.replace(/[^A-Za-z0-9- ']+/g,"");  
    return replacement; 
  }
  static titleize(string) {
    let words = string.split(' ');
    let first = words.shift(); 
    let titledFirst = first.charAt(0).toUpperCase() + first.slice(1); 
    for (let n = 0; n < words.length; n++) {
      if(words[n] != "a" && words[n] != "an" && words[n] != "the" && words[n] != "but" && words[n] != "of" && words[n] != "and" && words[n] != "for" && words[n] != "at" && words[n] != "from" && words[n] != "by") {
        words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
      } 
    }
    words.unshift(titledFirst); 
    return words.join(' '); 
  }
}
