class Formatter {
  //add static methods here
  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
  }
static sanitize(word){
   let referenceArr = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', `'`, '-', ' ']
   let filteredWord = []
   word.split('').forEach(function(e){
      if(referenceArr.includes(e.toLowerCase())){
        filteredWord.push(e)
      }
   })
    return filteredWord.join('')
  }

  static titleize(words){
     let referenceArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from',' ' ]
      let wordsArr = words.split(' ')
      let capitalizedWords = wordsArr.map(function(w,index){
          if(!referenceArr.includes(w) || index === 0){
            return Formatter.capitalize(w)
          } else {
            return w
          }
      })
      capitalizedWords[0].toLowerCase()
      console.log(capitalizedWords.join(' '))
       return capitalizedWords.join(' ')

    }

}