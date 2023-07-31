function contar(){
    //       **  VARIAVEIS  **

    var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')

    //        **  VERIFICAÇÃO  **
    
    if(n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
       window.alert('[ERRO] Dados não Prenchidos')
    }
    else{
        res.innerHTML = 'Contando: '
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)

        if(p <= 0){
            window.alert('[ERRO] Passo invalido! Considerando Passo = 1')
            p = 1
        }
        if(i < f){
        //  **  CONTAGEM CRESCENTE  **
            for(let c = i; c <= f ; c += p){
                res.innerHTML += ` ${c} => `
        }
     }else{
        //  **  CONTAGEM DECRESCENTE **
            for(let c = i;c >= f; c-=p){
                res.innerHTML += `${c} => `
            }   
        }
    
    } 
    res.innerHTML += `\u{1F3C1}`
}