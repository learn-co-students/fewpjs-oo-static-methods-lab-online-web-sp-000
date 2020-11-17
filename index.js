class Formatter {
  //add static methods here
  static capitalize(string) {
  	return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
  	const regex = /[a-zA-Z-' ]/g;
		const found = string.match(regex);
  	return found ? found.join('') : '';
  }

  static titleize(string) {
  	string = this.sanitize(string).toLowerCase();

  	const nots = 'The, A, An, But, Of, And, For, At, By, From';

  	let phrase = string.split(' ').map(w => this.capitalize(w));
  	
  	phrase = phrase.reduce( (total, word) => {
  		if (nots.includes(word)) {
  			word = word.toLowerCase()
  		};
  		return [total, word].join(' ');
  	});

  	return phrase
  }
}