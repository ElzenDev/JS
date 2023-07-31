// AULA 16 - Funções em JSS

function parimp(n) { // (n) -> parâmetro informal
    if(n%2 == 0){
        return'par!'  
    }else{
        return 'impar!'
    }
}

let res = parimp(223)       // parametro rel 
console.log(`Este é um numero ${res}`)