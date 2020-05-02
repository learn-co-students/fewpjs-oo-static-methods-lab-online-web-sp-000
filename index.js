class Formatter {
 static capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
    static sanitize(string){
      //return string.replace("[^A-Za-z0-9-]");
      return string.replace(/[^A-Za-z0-9- ']+/g, '');
    }

    static titleize(string){
      let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let result = []
      let arr = string.split(" ")
      let firstWord = this.capitalize(arr[0])
  
      let arrMod = arr.map( e => {
        if (exceptions.includes(e)){
          return e
        } else {
          return this.capitalize(e)
          }
        }
      )
  
      return firstWord + ' ' + arrMod.slice(1).join(' ');
    }
  }