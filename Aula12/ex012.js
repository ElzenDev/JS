var agora   =   new Date()
var diaSem  =   agora.getDay()
var dia     =   agora.getDate()
var mes     =   agora.getMonth()
var ano     =   agora.getFullYear()
var hora    =   agora.getHours()
var minutos =   agora.getMinutes()
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/
console.log(`Hoje é dia ${dia}/${mes}/${ano}`)
switch(diaSem){
    case 0 : console.log('Domingo')
    break

    case 1: console.log('Segunda-feira')
    break
    
    case 2: console.log('Terça-feira')
    break

    case 3: console.log('Quarta-feira')
    break

    case 4: console.log('Quinta-feira')
    break

    case 5: console.log('Sexta-feira')
    break

    case 6: console.log('Sabádo')
    break

    default: console.log('[ERRO] !DIA INVALIDO!')
}
console.log(`São ${hora}:${minutos}`)