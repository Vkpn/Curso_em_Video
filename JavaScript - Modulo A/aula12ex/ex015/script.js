function ver() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById(`res`)

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gen = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            gen = `Homem`
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'crim.png')
                var gen = `Criança`
            } else if (idade < 22) {
                img.setAttribute('src', 'adom.png')
                var gen = `Adolescente`
            } else if (idade < 50) {
                img.setAttribute('src', 'adum.png')
                var gen = `Homem`
            } else {
                // Idoso
                img.setAttribute('src', 'idom.png')
                var gen = `Senhor`
            }
        } else if (fsex[1].checked) {
            gen = `Mulher`
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'crif.png')
                var gen = `Criança`
            } else if (idade < 22) {
                img.setAttribute('src', 'adof.png')
                var gen = `Adolescente`
            } else if (idade < 50) {
                img.setAttribute('src', 'aduf.png')
                var gen = `Mulher`
            } else {
                // Idoso
                img.setAttribute('src', 'idof.png')
                var gen = `Senhora`
            }
        } 
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}