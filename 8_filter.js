// skapar en ny array med alla element i arrayen som uppfyller
// vilkoret som funktionen som man sötter in i filter ger
// returnerar en array

const arr = [4, 56, 23, 12, 6, 43]

const moreThanTwenty = (element) => element > 20

console.log(arr.filter(moreThanTwenty))