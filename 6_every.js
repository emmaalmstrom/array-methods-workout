// samma som förra fast kollar om ALLA element i arrayen
// uppfyller vilkoret som funktionen som man stoppar in
// i everyfuntionen har

const arr = [2, 16, 55, 3, 7]
const arr2 = [3, 42, 18, 9]

const isDevisibleByThree = (x) => x % 3 === 0

console.log(arr.every(isDevisibleByThree)) //false
console.log(arr2.every(isDevisibleByThree)) //true