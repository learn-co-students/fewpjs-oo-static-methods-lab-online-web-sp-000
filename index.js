const uncapitalizedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

class Formatter {
  static capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1);
  }

  static sanitize(inputString) {
    return inputString.replace(/[^A-Za-z0-9-'\b \b]+/g, '');
  }

  static titleize(inputString) {
    const inputArray = inputString.split(" ");
    const outputArray = [];
    inputArray.forEach((word) => {
      if (uncapitalizedWords.every((nonCapsWord) => nonCapsWord != word)) {
        outputArray.push(this.capitalize(word));
      } else {
        outputArray.push(word);
      }
    });
    outputArray[0] = this.capitalize(outputArray[0]);
    return outputArray.join(" ");
  }
}
