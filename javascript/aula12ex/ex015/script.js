function verificar() {
    var data = new Date(); // data agora
    var ano = data.getFullYear(); // ano atual
    var fano = window.document.getElementById('txtano');// dado do input text
    var sexo = window.document.getElementsByName('radsex');// dado do radion
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'img/bebe-homem.png');
            } else if (idade > 5 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'img/criança-homem.png');
            } else if (idade > 10 && idade <= 17) {
                // adolecent
                img.setAttribute('src', 'img/adolescente-homem.png');
            } else if (idade > 18 && idade <= 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-homem.png');
            } else if (idade > 50) {
                // idoso
                img.setAttribute('src', 'img/idoso-homem.png');
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 5) {
                //bebe
                img.setAttribute('src', 'img/bebe-mulher.png');
            } else if (idade > 5 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'img/criança-mulher.png');
            } else if (idade > 10 && idade <= 17) {
                // adolecent
                img.setAttribute('src', 'img/adolescente-mulher.png');
            } else if (idade > 18 && idade <= 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-mulher.png');
            } else if (idade > 50) {
                // idoso
                img.setAttribute('src', 'img/idoso-mulher.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}