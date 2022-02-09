var num = [5, 7, 9, 2, 3, 0]
num[6] = 8
num.push(4)
num.sort()
console.log(num)
console.log(`O meu vetor tem ${num.length} elementos.`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor está na posição ${pos}`)
}