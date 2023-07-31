let num = [35,45,50,105,205]
num.push(1)
console.log(num.sort(function(a , b){return a-b}))
console.log(`O vector tem ${num.length} elementos`)
console.log(`O primeiro valor do vector é ${num[0]}`)
let pos = num.indexOf(4)

if(pos == -1){
    console.log('O valor inserido não foi encontrado')
}else{
console.log(`O valor esta na posição ${pos}`)
}

/*for(let pos=0;pos < num.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

/*for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

/*console.log(`Ordem crescente: ${num.sort(function(a, b){return a-b})}`)
console.log(`Ordem decrescente: ${num.sort(function(a, b){return b-a})}`)*/

