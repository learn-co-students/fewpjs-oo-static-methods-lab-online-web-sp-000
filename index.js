class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let badword = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let answer = []
    let words = string.split(" ")
    for (let i = 0; i < words.length; i++)
    {
      if (i == 0)
      {
        answer.push(this.capitalize(words[i]))
      }
      else if (badword.includes(words[i]))
      {
        answer.push(words[i])
      }
      else
      {
        answer.push(this.capitalize(words[i]))
      }
    }
    return answer.join(" ");
  }
}