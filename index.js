class Formatter {
    //add static methods here

    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9- ']+/g, '');
    }

    static titleize(string) {
        // 1) is a static method
        // 2) capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
        // 3) always capitalizes the first word
        let titleizedString = string.split(" ").map(word => {
            if (this.isNotExcepted(word) && word !== this.firstWordOf(string, word)) {
                return word;
            } else {
                return this.capitalize(word);
            }
        });
        return titleizedString.join(" ");
    }

    static isNotExcepted(word) {
        switch (word) {
            case 'the':
            case 'a':
            case 'an':
            case 'but':
            case 'of':
            case 'and':
            case 'for':
            case 'at':
            case 'by':
            case 'from':
                return true;
            default:
                return false;
        }
    }

    static firstWordOf(string, word) {
        return string.slice(0, word.length)
    }
}