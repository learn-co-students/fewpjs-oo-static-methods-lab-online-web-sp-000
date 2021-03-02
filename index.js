class Formatter {
  static capitalize(string){
  	return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
  	return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  // let string = "getting giggles"

  static titleize(string){
  	let firstWord = string.split(" ")[0]
  	let firstSpace = string.indexOf(" ")
  	let restOfTheSentence = string.slice(firstSpace+1).split(" ")
  	let specialWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
  	let titleizeString = this.capitalize(firstWord)

  	for (const word of restOfTheSentence){
  		if (!specialWords.includes(word)){
  			titleizeString = titleizeString + " " + this.capitalize(word)
  		} else {
  			titleizeString = titleizeString + " " + word
  		}
  	}
  	return titleizeString

  }
}