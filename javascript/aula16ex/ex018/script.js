let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res')
let valores = [] // vetor fazio


// saber se e um numero
// arrow function
isNumero = (n) => {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// sabe se o numero esta na lista 
inLista = (n, l) => {
    //numero esta na lista:?
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valore invalido ou já encontrado na lista")
    }
    num.value = '' // limpar o campo
    num.focus() // dar o foco no campo para nao precisar clicar novamente
}

finalizar = () => {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length // total de elementes no array
        let maior = valores[0]   // valores na posicao incial do vetor
        let menor = valores[0]  // valores na posicao incial do vetor
        let soma = 0
        let media = 0
        // for verifica qual o numero maior e menor
        for (let pos in valores) {
            soma += valores[pos]    // soma dos valores
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot   // media dos valores
        res.innerHTML = '' // limpar os valores da resposta
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi:  ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi:  ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos  ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é  ${media}.</p>`
    }
}

