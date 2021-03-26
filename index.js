class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^a-z' -]/ig, "")
  }
  static titleize(string){
    let str = Formatter.capitalize(string)
    str = str.split(' ')
    let ans = str[0]
    for(let i = 1; i < str.length; i++){
      if (str[i] == 'the'||
          str[i] == 'a'||
          str[i] == 'an'||
          str[i] == 'but'||
          str[i] == 'of'||
          str[i] == 'and'||
          str[i] == 'for'||
          str[i] == 'at'||
          str[i] == 'by'||
          str[i] == 'from'){
        ans += " " + str[i]
      }
      else{
        ans += " " + Formatter.capitalize(str[i])
      }
    }
    return ans
  }
}