


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (Fano.value.length == 0 || Fano.value > ano){
        window.alert('[ERRO] Verifique os daodos e tente novamente!')
    } else {
        let Fsex = document.getElementsByName('radsex')
        let idade = ano - Number(Fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(Fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança / bebe 
                res.innerHTML = `Detetado um bebe , com ${idade} anos de idade`
                img.src = 'img/bebe-m.png'
            }
            else if(idade < 21){
                //Jovem
                res.innerHTML = `Detetado um Jovem , com ${idade} anos de idade`
                img.src = 'img/foto-jovem-m.png'
            }
            else if(idade < 51){
                //Adulto
                res.innerHTML = `Detetado um Adulto , com ${idade} anos de idade`
                img.src = 'img/foto-adulto-m.png'
            }
            else{
                //Idoso
                res.innerHTML = `Detetado um idoso , com ${idade} anos de idade`
                img.src = 'img/foto-idoso-m.png'
            }


        }else if(Fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                res.innerHTML = `Detetado uma bebe , com ${idade} anos de idade`
                //Criança / bebe nuu
                img.src = 'img/bebe-f.png'
            }
            else if(idade < 21){
                //Jovem
                res.innerHTML = `Detetado uma Jovem , com ${idade} anos de idade`
                img.src = 'img/foto-jovem-f.png'
            }
            else if(idade < 51){
                //Adulto
                res.innerHTML = ` Detetado uma Adulta , com ${idade} anos de idade`
                img.src = 'img/foto-adulto-f.png'
            }
            else{
                //Idoso
                res.innerHTML = `Detetado uma idosa , com ${idade} anos de idade`
                img.src = 'img/foto-idoso-f.png'
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
        
    }
}