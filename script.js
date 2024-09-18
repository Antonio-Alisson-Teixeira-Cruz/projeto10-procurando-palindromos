let word = prompt('Digite uma palavra para verificar se é um palíndromo.')
let inversedWord = ''

for (let i = word.length - 1; i >= 0; i--) {
    inversedWord += word[i]
}

if (word === inversedWord) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra ${word} não é um palíndromo.
Porque a palavra ${word} escrita ao contrário se torna: ${inversedWord}, portanto não pode ser considerada um palíndromo.`)
}
