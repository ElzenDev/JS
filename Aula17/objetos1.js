let amigo = {nome:`Mário`
, sexo:`M`
,peso:`30.5`
,engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(` ${amigo.nome} pesa ${amigo.peso}Kg`)