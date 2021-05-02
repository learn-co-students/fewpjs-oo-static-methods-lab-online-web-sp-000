class Formatter {
  //add static methods here

  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    str = str.replace("!", "")
    str = str.replace("$", "")
    str = str.replace("*", "")
    str = str.replace("#", "")
    str = str.replace("(", "")
    str = str.replace(")", "")
    str = str.replace("@", "")
    str = str.replace("^", "")
    str = str.replace("{", "")
    return str
  }

  static titleize(str){
    let sent = str.split(" ")
    sent[0] = Formatter.capitalize(sent[0])
    for (const i in sent){
      if (sent[i] == "a" || sent[i] == "an" || sent[i] == "but"
       || sent[i] == "of" || sent[i] == "and" || sent[i] == "for"
       || sent[i] == "at" || sent[i] == "by" || sent[i] == "from"
       || sent[i] == "the"){

       }
       else{
         console.log(sent[i])
         sent[i] = Formatter.capitalize(sent[i])
       }
    }
    return  sent.join(" ")
  }
}