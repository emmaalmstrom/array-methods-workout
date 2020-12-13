// map tar en funtion som argument och påverkar alla
// element i arrayen i med den funktionen. den skapar en ny array
// med dom element som uppfyllt vilkoret
// returnerar en array

const arr = [3, 5, 8, 423, 2, 38]
const appleProducts = ['iPhone', 'iPad', 'Mac', 'airpods']

const devideWithTwo = (number) => number / 2
const capslok = (str) => str.toUpperCase()

console.log(arr.map(devideWithTwo))
console.log(appleProducts.map(capslok))