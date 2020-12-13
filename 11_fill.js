// fyller en array med ett specifikt värde 
// man kan välja när den ska börja fylla 
// och sluta fylla men standars inställningen
// säger att den ska bärja från 0 och fylla till
// lutet på arrayen
// arrayen påverkas, ingen ny array skapaa

const arr = [1, 2, 3, 4, 5, 6]
const strings = ['hej', 'på', 'dig', 'einar']

arr.fill(12)
console.log(arr) // [12, 12, 12, 12, 12, 12]

arr.fill(0, 2, 5)
console.log(arr) // [12, 12, 0, 0, 0, 12]

strings.fill('hej')
console.log(strings)

strings.fill('einar', 1, 3)
console.log(strings)