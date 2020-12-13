// some tar en funktion som ett argumment och denna function
// ska vara ett vilkor som tar ett argument och svara med en boolean
// beroende på om argumentet uppfyller vilkoret eller ej
// some svarar med en boolean värde beroende på om minst ett element
// i funtionen uppfyller vilkoret som funktionen har
// returnerar en boolean value

const arr = [1, 7, 5, 9, 33]
const arr2 = [3, 5, 1, 6]

const moreThanTen = (x) => x > 10

console.log(arr.some(moreThanTen)) //true
console.log(arr2.some(moreThanTen)) // false