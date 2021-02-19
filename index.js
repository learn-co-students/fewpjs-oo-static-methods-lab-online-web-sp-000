class Formatter {
  //add static methods here
  static capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(str) {
    let arr = str.split(" "); 
    let arr2 = ["the","a","an","but","of","for","at","by","from", "and"];
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
          if (i === 0 || !arr2.includes(arr[i])) {
            arr3.push(this.capitalize(arr[i]));
          } else {
            arr3.push(arr[i]);
          }
      }
    return arr3.join(" ");
  }
}