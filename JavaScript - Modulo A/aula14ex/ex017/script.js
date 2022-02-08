function calcular(){
    var num = document.getElementById(`fnum`)
    var res = document.getElementById(`restab`)

    if (num.value.length == 0){
        alert(`[ERRO] Favor preencher o numero corretramente.`)

    } else {
        var n = Number(num.value)    
        var m = 1
        res.innerHTML = ``

        for ( var item; m <= 10; m++) {
            item = document.createElement(`option`)
            item.text = `${n} x ${m} = ${n*m}`
            res.appendChild(item)
        }
        
        /*
        while (m <= 10){
            var item = document.createElement(`option`)
            item.text = `${n} x ${m} = ${n*m}`
            res.appendChild(item)
            m++
        }
        */
    } 

}