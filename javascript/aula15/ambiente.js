let num = [5, 8, 4, 9];

num[4] = 6
num.push(10) // adiciona o 10 a ultima posssicao
num.length // tamanho do vetor
num.sort()// organiza os numeros no vertor por ordem crescente
num.indexOf[4]
console.log(`Nosso vetor é o ${num} , tamanho ${num.length}`)

// for normal
for (let i = 0; i < num.length; i++) {
    console.log(`Numero na posição ${i} é ${num[i]}`)
}
// for in 
for (let key in num) {
   // console.log(num[key])
}
let i = num.indexOf(8)
console.log(`O valor 8 está na posição ${num.indexOf(8)}`)
