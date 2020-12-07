class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    const regex = /[^\w-'\s]/g
    return string.replace(regex, '')
  }

  static titleize(string){
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const [a,...rest] = string.split(' ')
    let array = [this.capitalize(a)]
  
    for(const w of rest){
      if(!words.includes(w)){
        array.push(this.capitalize(w))
      }else{
        array.push(w)
      }
    }
    return array.join(" ")

  }
}