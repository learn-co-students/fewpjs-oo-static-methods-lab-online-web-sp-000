class Formatter {
  //add static methods here
  static capitalize(str){
    return str.replace(/\b[a-zA-Z]/gi, x => x.toUpperCase() )

  }

  static sanitize(str){
    return str.replace(/[^a-z\s\'\"\-]/gi,"")
  }

  static titleize(str){
    const exceptions = ['the','a','an','but','of','and','for','at','by','from']
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr.replace(/\b(\w*)/gim, function(x){
      return (exceptions.includes(x)) ? x : (x.charAt(0).toUpperCase() + x.slice(1))
    });
  }
}
