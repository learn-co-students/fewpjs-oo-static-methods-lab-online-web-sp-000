class Formatter {
  //add static methods here
  static capitalize(text){
    return text.charAt(0).toUpperCase() + text.substr(1);
  }

  static sanitize(text){
    let str = text.replace(/[^a-z0-9áéíóúñü \.,_\'\-]/gim, "");
    return str.trim();
  }

  static titleize(text){
    let array = text.split(" ");
    let exclusions = ["the", "a", "an", "but", "of", "for", "and", "at", "by", "from"]
    for (let i=0; i < array.length; i++){
      if (i ===0){
        array[i] = this.capitalize(array[i]);
      } else {
        if (exclusions.includes(array[i]) === false){
          array[i] = this.capitalize(array[i]);
        }
      }
    }
    return array.join(" ");
  }
}