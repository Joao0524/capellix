const divSecreta = document.getElementById("entradaSecreta")

document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'j' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();

        divSecreta.classList.remove('escondido');

    }
});
const controlePlanos = document.querySelector('.controle');

function atualizarPrecos() {
    //pega o valor e faz a verificação
    const planoSelecionado = document.querySelector('input[name="plano"]:checked');
    const valor = planoSelecionado ? planoSelecionado.value : 'mensal';

    //pega as divs do plano
    const precoStandard = document.getElementsByClassName('preco')[0];
    const precoPro = document.getElementsByClassName('preco')[1];
    const precoPremium = document.getElementsByClassName('preco')[2];
    const parcelas = document.getElementsByClassName('visivel')

    // se ele não existirem para
    if (!precoStandard || !precoPro || !precoPremium) return;

    //muda conforme o modo
    if (valor === 'mensal') {
        precoStandard.textContent = 'R$14,99';
        precoPro.textContent = 'R$24,99';
        precoPremium.textContent = 'R$29,99';
        Array.from(parcelas).forEach(element => {
            element.classList.add('escondido')
        });
    } else if (valor === 'anual') {
        precoStandard.textContent = 'R$179,99';
        precoPro.textContent = 'R$199,99';
        precoPremium.textContent = 'R$359,99';
        Array.from(parcelas).forEach(element => {
            element.classList.remove('escondido')
        });
    }
}

// para ir mudando conforme o botão
if (controlePlanos) {
    controlePlanos.addEventListener('change', atualizarPrecos);
}

const selectIdioma = document.getElementById("selectIdioma");
const botao = document.querySelector('header > button')
const h1 = document.querySelector('div > h1')
const h2 = document.querySelector('div > h2')
const labelTempo = document.querySelectorAll( '.toggle-planos > label')
const anual = labelTempo[0]
const mensal = labelTempo[1]
const nomesPlanos = document.querySelectorAll('.card-plano > h4')
const standard = nomesPlanos[0]
const pro = nomesPlanos[1]
const premium = nomesPlanos[2]



selectIdioma.addEventListener('change', () => {
    if(selectIdioma.value === "ingles"){
        botao.innerText = "Login"
    }
});

const botaoLogin = document.getElementById('login')

botaoLogin.addEventListener('click', () =>{
    window.location.href = './login.html'
})