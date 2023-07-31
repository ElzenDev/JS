let vals = [];
let num = document.querySelector('#txtn');
let tab = document.querySelector('#txtin');
let res = document.querySelector('#res');

function adicionar(){
    //  **  VERIFICAÇÕES ** //
    res.innerHTML = ''
    if(num.value.length == 0 ){
        res.innerHTML = '<h3> Adicione algum numero e tente de novo</h3> ' 
    }
    else if(num.value < 1 || num.value > 100){
        window.alert('[ERRO] Adicione um numero entre 1 e 100')
    }
    else if(vals.indexOf(parseInt(num.value)) != -1){
        res.innerHTML = '<h3> Este numero ja foi adicionado </h3> '
    }

    //  ** INSERIR VALORES NO ARRAY ** //
    else{
        vals.push(parseInt(num.value))

        // ** INSERIR ELEMENTO NA TABELA ** //
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.name = `item`
        tab.appendChild(item)
    }
    num.value = ''
}

function analisar(){
    if(vals.length == 0){
        res.innerHTML = '<h3> Adicione algum numero e tente de novo</h3> '
    }
    else{

    let soma = 0
    for(let c = 0; c < vals.length; c++){
        // ** SOMA ** //
        soma += vals[c]
        var res_soma = Number(soma)
    }

    // ** MEDIA ** //
    var med = ((res_soma) / Number(vals.length)).toFixed(2)

    // ** 1º NUMERO || MENOR NUMERO ** //
    vals.sort(function(a,b){return(a-b)})
    var nMenor = vals[0]

    // ** ULTIMO NUMERO || MAIOR NUMERO ** //
    vals.sort(function(a,b){return b-a})
    var nMaior = vals[0]
    
    res.innerHTML = `O array contêm ${vals.length} valores <br> O 1º valor é  ${nMenor}<br> O ultimo valor é  ${nMaior}<br>A soma dos valores é igual a ${res_soma}<br>A media dos valores é igual a ${med}`
    }
}

function apagar(){
    vals = []
    num.value = ''
    tab.innerHTML = ''
    res.innerHTML = ''
}
