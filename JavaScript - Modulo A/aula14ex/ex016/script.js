function contar(){
    var ini = document.getElementById(`finicio`)
    var fim = document.getElementById(`ffim`)
    var sal = document.getElementById(`fsalto`)
    var res = document.getElementById(`fres`)
    var imp = document.getElementById(`fimp`)

    if (ini.value.length == 0 || fim.value.length == 0 || sal.value.length == 0 || ini.value == fim.value){
        if (ini.value.length == 0) {
            alert(`[ERRO] Valor inicial em branco.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        } else if (fim.value.length == 0) {
            alert(`[ERRO] Valor final em branco.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        } else if (sal.value.length == 0) {
            alert(`[ERRO] Valor do salto em branco.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        } else if (ini.value == fim.value) {
            alert(`[ERRO] Valor inicial e final iguais.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        }
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var s = Number(sal.value)
        if (s <= 0){
            alert(`[ERRO] Valor de salto não pode ser 0 ou negativo, considerando salto igual a 1.`)
            s = 1
            document.getElementById(`fsalto`).value = 1;
        }
        res.innerHTML=`Contando: <br>`
        if (i < f) {
            for(var c = i; c <= f; c += s){
                res.innerHTML += ` ${c} \u{27a1} `
            }
        } else {
            for(var c = i; c >= f; c -= s){
                res.innerHTML += ` ${c} \u{27a1} `
            }
        }
        res.innerHTML += `\u{2714}`
        document.getElementById(`fimp`).disabled = false
    }
}

function imp(){
    var ini = document.getElementById(`finicio`)
    var fim = document.getElementById(`ffim`)
    var sal = document.getElementById(`fsalto`)
    var res = document.getElementById(`fres`)
    

    if (ini.value.length == 0 || fim.value.length == 0 || sal.value.length == 0 || ini.value == fim.value){
        if (ini.value.length == 0) {
            alert(`[ERRO] Valor inicial em branco.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        } else if (fim.value.length == 0) {
            alert(`[ERRO] Valor final em branco.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        } else if (sal.value.length == 0) {
            alert(`[ERRO] Valor do salto em branco.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        } else if (ini.value == fim.value) {
            alert(`[ERRO] Valor inicial e final iguais.`)
            res.innerHTML = `Impossivel contar!`
            document.getElementById(`fimp`).disabled = true
        }
    } else {
            var dados = document.getElementById(`fres`).innerHTML
            var imprimir = window.open()
            imprimir.document.write(innerHTML = `<p>Obrigado!</p>` + dados)
            imprimir.print()
    }
}