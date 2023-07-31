// Factorial denovo ;-;
/*
 FORMA RECURSIVA
 5! = 5 x 4 x 3 x 2 x 1
 5! = 5 x 4!
 logo:
   n! = n x (n-1)!
   
*/
var n1 = Math.floor(Math.random() * 9 + 2)
 function factorial(n){
    if (n ==1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(`${n1}! é igual a ${factorial(n1)}`)
