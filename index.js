class Formatter {
  //add static methods here
  static capitalize(string) {
       return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(str) {
      str = str.replace(/[^'a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
    }

    static titleize(string) {
      let arr = string.split(" ");
      let newWord = [];
      let okArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      for (let i = 0; i < arr.length; i++) {
        if (okArr.includes(arr[i]) && i > 0) {
          newWord.push(arr[i])
          continue;
        }
        newWord.push(this.capitalize(arr[i]))
      }
      return newWord.join(" ");
    }
}
