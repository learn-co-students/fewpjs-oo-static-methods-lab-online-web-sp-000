class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }

  static sanitize(string){
    let newString=string.split("")
    let newArr=[]
    for (let item of newString) {
      if (item.search(/[a-z-'\s]/gi)>=0) {
        newArr.push(item)
      }
    }
    return newArr.join("")
  }

  static titleize(sentence){
    let newArr=sentence.split(" ")
    let capArr=[]
    for (let item of newArr) {
      if (item!="the"&&item!="a"&&item!="an"&&item!="but"&&item!="of"&&item!="and"&&item!="for"&&item!="at"&&item!="by"&&item!="from") {
        capArr.push(this.capitalize(item))
      }
      else {
        capArr.push(item)
      }
    }
    capArr[0]=this.capitalize(capArr[0])
    return capArr.join(" ")
  }
}
