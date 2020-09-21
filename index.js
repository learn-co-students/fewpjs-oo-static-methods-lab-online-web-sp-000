class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    const array = string.split(' ')
    const new_array = array.map(function(e){return Formatter.titleWord(e)})
    new_array[0] = Formatter.capitalize(new_array[0])
    return new_array.join(' ')
  }

  static titleWord(string){
    const testarray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    if (testarray.find(s => s===string)){
      return string
    }
    else{
      return Formatter.capitalize(string)
    }
  }
}
