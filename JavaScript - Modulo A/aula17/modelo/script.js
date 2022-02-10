var num = document.getElementById(`fnum`)
var sel = document.getElementById(`fsel`)
var res = document.getElementById(`fres`)
var final = []

function checknum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function checklista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(checknum(num.value) && !checklista(num.value, final)){
        final.push(Number(num.value))
        var item = document.createElement(`option`)
        item.text = `O valor ${num.value} foi adicionado.`
        sel.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert(`[ERRO] Valor inválido ou já encontrado na lista`)
    }
    num.value = ``
    num.focus()
}

function analisar(){
    if(final.length == 0){
        alert(`[ERRO] Adicione numeros para serem analisados!`)
        num.value = ``
        num.focus()
    } else {
        var tot = final.length
        var maior = final[0]
        var menor = final[0]
        var soma = 0
        var media = 0
        for(var pos in final) {
            soma += final[pos]
            if(final[pos] > maior)
                maior = final[pos]
            if(final[pos] < menor)
                menor = final[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p> `
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média de todos os valores é ${media}. </p>`

    }
}