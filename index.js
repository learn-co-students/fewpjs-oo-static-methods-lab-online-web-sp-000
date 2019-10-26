class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.input.replace(/\W/g, ''); 
  }

  static titleize(str) {  
    return str.toLowerCase().replace(/(^|\s)\S/g,  
    (firstLetter) => firstLetter.toUpperCase());
  }
  // static titleize(str) {
  //   let words = str.split(' ');
  //   for (let n = 0; n < words.length; n++) {
  //     words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
  //   }
  //   return words.join(' ');
  // }

}