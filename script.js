var jogador = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
    var quadrado =  document.getElementById(id);
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'black';

    if(jogador === 'X') {
        jogador = 'O';
    }else {
        jogador = 'X';
    }

    mudarJogador(jogador);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function vencedorCheck() {
    var quadrado1 = document.getElementsByID('1');
    var quadrado2 = document.getElementsByID('2');
    var quadrado3 = document.getElementsByID('3');
    var quadrado4 = document.getElementsByID('4');
    var quadrado5 = document.getElementsByID('5');
    var quadrado6 = document.getElementsByID('6');
    var quadrado7 = document.getElementsByID('7');
    var quadrado8 = document.getElementsByID('8');
    var quadrado9 = document.getElementsByID('9');
    
}

function sequenciaCheck(quadrado1, quadrado2, quadrado3) {
    var eIgual = false;

    if(quadrado1.innerHTML != '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true;
    }

    return eIgual;
}