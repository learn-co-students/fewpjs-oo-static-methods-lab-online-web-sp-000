class Formatter {
  //add static methods here

  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(word){
    return word.replace(/[^A-Za-z-'\s]/g, "")
  }

  static titleize(sentence){
    let nonCapitalizingWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentenceArray = sentence.split(" ")
    sentenceArray[0] = sentenceArray[0][0].toUpperCase() + sentenceArray[0].slice(1)
    let capitalizedArray = sentenceArray.map(function(word){
      if (nonCapitalizingWords.find(e => e === word)){
        return word
      }
      else{
        return word[0].toUpperCase() + word.slice(1)
      }
    })
    return capitalizedArray.join(" ")
  }
}