const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedString = ''
    expr = expr.split()
    let devidedNumberStrings = []
    let getMorseLetter = []
    let morseLettersCollection = []

    expr.forEach((it) => {
        devidedNumberStrings.push(it.match(/.{1,10}/g))
    })

    devidedNumberStrings.forEach((codedWord) => {
        codedWord.forEach((codedLetter) => {
            getMorseLetter.push(codedLetter.match(/.{1,2}/g).filter((it) => it !== '00'))
        })
    })

    getMorseLetter.forEach((codedLetter) => {
        let convertedLetter = codedLetter.map((it) => {
            if (it === '10')

                return '.'
            if (it === '11')

                return '-'
            else

                return ' '
        })
        morseLettersCollection.push(convertedLetter.join(''))
    })

    morseLettersCollection.forEach((morseLetter) =>
        MORSE_TABLE[morseLetter] ? decodedString += MORSE_TABLE[morseLetter] : decodedString += ' '
    )

    return decodedString
}

module.exports = {
    decode
}
