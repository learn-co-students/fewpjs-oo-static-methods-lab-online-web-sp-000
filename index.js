class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    const arr = string.split(' ')
    const new_arr = arr.map(function(e){return Formatter.titleWord(e)})
    new_arr[0] = Formatter.capitalize(new_arr[0])
    return new_arr.join(' ')
  }

  static titleWord(string){
    const testarr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    if (testarr.find(s => s===string)){
      return string
    }
    else{
      return Formatter.capitalize(string)
    }
  }
}
