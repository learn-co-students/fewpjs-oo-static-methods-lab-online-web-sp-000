class Formatter {

    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    static sanitize(str) {
        return str.replace(/[^\w-' ]+/g, '')
    }

    static titleize(str) {
        let splitStr = str.toLowerCase().split(' ')
        for (let i = 0; i < splitStr.length; i++) {
           if ( splitStr[i] === 'the'  ||
                splitStr[i] === 'a'    ||
                splitStr[i] === 'an'   ||
                splitStr[i] === 'but'  ||
                splitStr[i] === 'of'   ||
                splitStr[i] === 'and'  ||
                splitStr[i] === 'for'  ||
                splitStr[i] === 'at'   ||
                splitStr[i] === 'by'   ||
                splitStr[i] === 'from'
            ){
                splitStr[i] = splitStr[i].toLowerCase()
            } else {
                splitStr[0] = splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1)
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
            }
        }
        return splitStr.join(' ')
    }
}