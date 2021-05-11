class Formatter {

    static capitalize(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    static sanitize(str) {
        return str.replace(/[^a-zA-Z0-9 '-]/g, '')
    }

    static titleize(str) {
        let arr = str.split(" ")
        const titleWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
        return arr.map(e => {
            if (arr[0] == e || !titleWords.includes(e)) return Formatter.capitalize(e)
            else return e
        }).join(" ")
    }

}