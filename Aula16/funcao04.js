// FACTORIAL DE UM NUMERO
/* Ex:
        5! = 5x4x3x2x1
        5! = 120
        O sinal '!' representa o factorial de um numero
*/
var n1 = Math.floor(Math.random() * 9 + 2)

function factorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(`${n1}! é igual a ${factorial(n1)}`)