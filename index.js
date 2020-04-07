class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-'\s]+/g, '')

    }

    static titleize(string) {
        let exclusions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
        let splitString = string.split(" ")
        let newArray = []
        newArray.push(Formatter.capitalize(splitString[0]))
        splitString = splitString.slice(1)
        splitString.forEach(word => {
            if (exclusions.includes(word)) {
                newArray.push(word)
            } else
                newArray.push(Formatter.capitalize(word))
        });

        return newArray.join(" ")

    }
}