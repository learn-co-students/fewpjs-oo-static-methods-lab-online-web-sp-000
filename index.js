class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let array = string.split(" ")
    let newArr = [];

    for(let i = 0; i < array.length; i++){
      if (exceptions.find(e => e === array[i]) && array[i] !== array[0] ) {
        newArr.push(array[i])
      } else {
        newArr.push(this.capitalize(array[i]))
      }
    }

    return newArr.join(" ")
  }

}
