function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    //var hora = data.getHours()
    
    var hora = 22
     
    if (hora >= 6 && hora < 12){
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = `imagens/manha.png`
        document.body.style.background = `#66944b` 
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = `imagens/tarde.png`
        document.body.style.background = `#c2937e`
    } else if (hora >= 18 && hora < 24){
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = `imagens/noite.png`
        document.body.style.background = `#654f8f`
    } else {
        msg.innerHTML = `Boa madrugada! Agora são ${hora} horas.`
        img.src = `imagens/madrugada.png`
        document.body.style.background = `#696969`
    }
}
