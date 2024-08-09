const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
   
        enunciado: "De quem é essa a famosa frase: Penso logo existo?",
        alternativas: [
            {
                texto: "Descartes.",
                afirmacao: "Correto."
            },
            {
                texto: "Socrates.",
                afirmacao: "Errado, Je pense, donc je suis é a frase original, escrita em francês, do filósofo René Descartes (1596-1650). Ela resume o pensamento e o método de Descartes, para quem tudo tem início na dúvida.."
            }
        ]
    },
    {
        enunciado: "De onde é a invenção do chuveiro eletrico?",
        alternativas: [
            {
                texto: "Brasil.",
                afirmacao: "Correto."
            },
            {
                texto: "França.",
                afirmacao: "Errado, Francisco Canhos é o nome do homem que, na década de 40, desenvolveu o primeiro chuveiro elétrico seguro em Jaú-SP. O aparelho vinha sendo desenvolvido desde os anos 30, mas apresentava riscos de curto-circuito."
            }
        ]
    },
    {
        enunciado: "Qual o livro mais vendido no mundo?",
        alternativas: [
            {
                texto: "Biblia.",
                afirmacao: "Correto."
            },
            {
                texto: "Dom Quixote.",
                afirmacao: "Errado!O livro mais vendido foi a Biblia!"
            }
        ]
    },
    {
        enunciado: "Em que periodo pré-historico o fogo foi descoberto? ",
        alternativas: [
            {
                texto: "Neolitico.",
                afirmacao: "Foi no Paleolítico que o fogo começou a ser utilizado, quando os homens aprenderam que era possível obter fogo por meio do atrito de pedaços de madeira e pedra.."
            },
            {
                texto: "Paleolitico.",
                afirmacao: "Está correta. "
            }
        ]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();