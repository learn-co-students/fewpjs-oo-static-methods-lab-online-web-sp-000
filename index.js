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
        string
    }

    _isNotExcepted(word) {
        switch (word) {
            case 'the':
            case 'a':
            case 'an':
            case 'but':
            case 'for':
            case 'at':
            case 'by':
            case 'from':
                return true;
            default:
                return false;
        }
    }
}