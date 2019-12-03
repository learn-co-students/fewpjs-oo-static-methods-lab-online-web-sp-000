class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(string){
      let array = string.split(" ");
      //console.log(this.capitalize(array[0]))
      //console.log(array)
      array.splice(0, 1, this.capitalize(array[0]))
      for(let i = 1; i < array.length; i++){
        // \w
        console.log(array[i])
        if(!array[i].match(/^(a|the|an|at|but|of|and|by|for|from)$/g)){
          //console.log(this.capitalize(array[i]))
          array.splice(i, 1, this.capitalize(array[i]));
        }
      }
      return array.join(" ")
  }

}