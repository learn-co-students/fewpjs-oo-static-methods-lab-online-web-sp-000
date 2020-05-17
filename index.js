class Formatter {
	static capitalize(string) {
		let strArray = string.split("");
		strArray[0] = strArray[0].toUpperCase();
		return strArray.join("");
	}

	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
	}

	static titleize(string) {
		let strArray = string.split(" ");
		let newArray = []
		let i = 0
		for (let word of strArray) {
			if (["a", "an", "but", "of", "and", "for", "at", "by", "the", "from"].includes(word)
				&& i != 0) {
				newArray.push(word);
			} else {
				let wordArr = word.split("")
				wordArr[0] = wordArr[0].toUpperCase();
				newArray.push(wordArr.join(""));				
			}
			i += 1
		}
		
		return newArray.join(" ")
	}
}