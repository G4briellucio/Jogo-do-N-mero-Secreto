let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto =gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'The Game of Secret Number';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Number from 1 to 10';

function ExibirTextoNaTela(tag , texto) 
    {
        let campo = document.querySelector(tag);          //função com parametros , exibir tag e texto
        campo.innerHTML = texto;
        responsiveVoice.speak(texto , 'Brazilian Portuguese Female',{rate:1.2});
    }
function exibirMensagemInicial()
    {
        ExibirTextoNaTela('h1','Jogo do Número Secreto');  //todas as tags que tiverem 'h1' ou 'p' serão alteradas
        ExibirTextoNaTela('p','Digite um número de 1 a 10');
    }

exibirMensagemInicial();

//Acima foi criado uma função com parâmetros seguido de uma outra variavel na qual , foi armazenado e executado duas variaveis 
//'titulo' e 'paragrafo' ,uma pratica com intuito de enxugar o código e deixa-lo mais legivel !!

function verificarChute() 
    {
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto)
            {
                ExibirTextoNaTela('h1', 'Você Acertou !!')               // Exibir texto na linha h1 no caso se chute for igual ao numero secreto
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Parabens vc acertou o número secreto com ${tentativas} ${palavraTentativa}`;
                ExibirTextoNaTela('p' , mensagemTentativas);
                document.getElementById ('reiniciar').removeAttribute('disabled') ;
            } 
            else 
            {
                if (chute > numeroSecreto) 
                {
                    ExibirTextoNaTela('p' , 'O número secreto é menor');
                } 
                else 
                { 
                  (chute < numeroSecreto)
                  ExibirTextoNaTela('p' , ' O número secreto é maior');
                }
             //tentativas = tentativa + 1 ; ambas possuem a mesma função 
             tentativas++ ;
             limparCampo(); 
            }
    }
//      = atribuir valor ; == comparar valor

function gerarNumeroAleatorio() 
    {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 ); //função com retorno
        let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeNumerosNaLista == numeroLimite )
            {
                listaDeNumerosSorteados = [];
            }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)) // includes , conferir se determinado item ou numero esta na lista
        {
            return gerarNumeroAleatorio();
        }
        else
        {
            listaDeNumerosSorteados.push(numeroEscolhido);  // push inserir itens/numeros na lista
            console.log(listaDeNumerosSorteados)
            return numeroEscolhido;
        }
    }

function limparCampo()
    {
        chute = document.querySelector('input')
        chute.value = '';
    }

function reiniciarJogo()
    {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
