class Formatter {
  //add static methods here
	static capitalize(str) {
		return str[0].toUpperCase() + str.slice(1)
	}

	static sanitize(str) {
		return str.replace(/[^A-Za-z0-9-' ]+/g, '');
	}

	static titleize(str) {
		const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
		let words = this.capitalize(str).split(" ")
		return words.map(word => exceptions.includes(word) ? word : this.capitalize(word)).join(" ")
	}
}
