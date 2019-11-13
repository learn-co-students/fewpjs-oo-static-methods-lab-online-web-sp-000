class Formatter {
    //add static methods here

    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        return string.replace(/[^ A-Za-z0-9-']+/g, '');
    }

    static titleize(string) {
        // return string.charAt(0).toUpperCase() + string.slice(1);
        // return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        // return string.split('').charAt(0).toUpperCase() + string.slice(1);

        let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
        let arrayOfStrings = string.split(" ");
        let result = [];

        for (let i=0; i < arrayOfStrings.length; i++) {

            // at the first element of the iteration...
            if (i === 0) {
                // add the word to the new array with the first character capitalized
                result.push(this.capitalize(arrayOfStrings[i]));
            } else {
                // if i != 0 but === any of the exception words
                if (except.includes(arrayOfStrings[i])) {
                    // add the word to the new array as is
                    result.push(arrayOfStrings[i]);
                } else {
                    // otherwise add the word to the new array with the first character capitalized
                    result.push(this.capitalize(arrayOfStrings[i]));
                }
            }
        }

        // return the new array joined together as one string
        return result.join(" ");
    }

}
