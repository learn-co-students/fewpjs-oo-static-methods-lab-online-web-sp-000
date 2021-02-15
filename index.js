class Formatter {
  //add static methods here
  static capitalize(string)
  {
    return string[0].toUpperCase() + string.substring(1)
  }
  static sanitize(input)
  {
    return input.replace(/[^a-zA-Z\s\'-]/g, '')
  }
  static titleize(input)
  {
    return Formatter.capitalize(input.split(" ").map(function(x) {
      if(!((x == "the") || (x == "a") || (x == "an") || (x == "but") ||  (x == "for") || (x == "at") || (x == "by") || (x == "from") || (x == "and") || (x == "of")))
      {
        return Formatter.capitalize(x)
      }
      else
      {
        return x
      }
    }).join(" "))
  }

}
