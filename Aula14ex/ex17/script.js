function tabuada(){
    
    const num = document.querySelector('#txtn')
    const tab = document.querySelector('#seltab')

    if (num.value.length == 0){
        window.alert('[ERRO] Por favor digite um numero')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for(c;c <= 12; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n *c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}

function apagar(){
    const tab = document.querySelector('#seltab')
    tab.innerHTML = '<option>!! Tabuada apagada !!</option>' + '<option value="">--Digite outro numero--</option>'
    
}

