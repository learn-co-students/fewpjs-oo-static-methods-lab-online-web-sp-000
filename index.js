class Formatter {
  //add static methods here
}

static capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

static sanitize(string) {
  return string.replace(/[^A-Za-z0-9- ']+/g, '')
}

static titleize(string) {
  const skip = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  const splitString = string.split(" ")
  let newArr = [this.capitalize(splitString[0])]
  for(let i = 1; i < splitString.length; i++) {
    if (skip.includes(splitString[i])) {
      newArr.push(splitString[i])
    } else {
      newArr.push(this.capitalize(splitString[i]))
    }
  } 
  return newArr.join(" ") 
}
}