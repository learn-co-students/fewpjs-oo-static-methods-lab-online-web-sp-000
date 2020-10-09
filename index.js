class Formatter {
  //add static methods here
  
  static capitalize(letters){
    return letters.charAt(0).toUpperCase() + letters.slice(1)
  }

  static sanitize(string){
    var alphasAndSome = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-' "
    var newString = ""
    for(var el of string){
      if (alphasAndSome.includes(el)){
        newString = newString.concat(el)
      }
    }
    return newString
  }

  static titleize(string){
      var tutorial = string
      var otherWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var stringArray = string.split(' ')
      var newString = []

      for(var el of stringArray){
        if(otherWords.includes(el) && stringArray.indexOf(el) != 0){
          continue  
        }
        else{
          tutorial = tutorial.replace(el, function(word){ return word[0].toUpperCase().concat(word.slice(1))})
        }
      }
      
      return tutorial
  }

}