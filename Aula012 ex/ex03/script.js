function carregar(){
    const section = document.querySelector('#box')
    let msg = window.document.querySelector('#msg')
    let img = window.document.querySelector('#imagem')
    const data = new Date()
    //let hora = data.getHours()
    var hora = 23
    msg.textContent = `Agora são ${hora} horas`;
    if(hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'img/manha.png';
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    }
    else{
        //Boa Noite
        img.src = 'img/noite.png'
        document.body.style.background = '#324252'
        section.style.background = '#344458'
    }
}