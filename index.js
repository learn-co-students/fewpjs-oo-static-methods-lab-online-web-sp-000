class Formatter {
  //add static methods here
  
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9\- ']+/g,"");
  }
  static titleize(sentence){
    let words = sentence.split(" ");
    return words.map((x, i) => {
      let articles = ["the", "a", "and", "for", "at", "by", "from", "an", "of", "but"]
      if (i === 0 || articles.indexOf(x) === -1){
        return x[0].toUpperCase() + x.slice(1);
      } else{
        return x;
      }
    }).join(" ");
  }
}