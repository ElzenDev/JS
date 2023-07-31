const prompt = require("prompt")

var Prompt = prompt

function Calculo(){
    var n1 = Prompt('Digite Um Numero')
    var n2 = Prompt('Digite Outro Numero')
    var soma = Number(n1) + Number(n2)
    var sub = Number(n2) - Number(n1)
    var mult = Number(n1) * Number(n2)
    if(n1 > 10 && n2 < 10){
        console.log(sub)
    }else if(n1 < 10 && n2 > 10){
        console.log(soma)
    }else{
        console.log
    }
}
Calculo()