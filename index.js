class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(sentence){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let _titleizeWord = function(string) {
         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        result = [];
        let words = sentence.split(' ');
        for (let i = 0; i< words.length; i++){
        if(i === 0){
          result.push(_titleizeWord(words[i]))
        }else if (arr.includes(words[i])){
            result.push(words[i]);
        }else {
          result.push(_titleizeWord(words[i]))
        }
        }
    
    return result.join(" ");

}

}







