localStorage.setItem('giorno', '041685')
localStorage.setItem('yoonchae', '120607')
localStorage.setItem('gus', 'S2S2S2')

const conta = document.getElementById("inputConta")
const senha1 = document.getElementById("inputSenha")
const senha2 = document.getElementById("confirmaSenha")
const msgErro = document.getElementById("msgErro")
const msgErro2 = document.getElementById("msgErro2")
const inputExcluir = document.getElementById("inputExcluir")
const formCadastro = document.querySelector('form'); 
const btnCriar = document.getElementById("btnCriar")
const btnSalvar = document.getElementById("salvar")
const btnMostrar = document.getElementById("mostrar")
const btnExcloi = document.getElementById("btnExcloi")
const btnExcluir = document.getElementById("btnExcluir")
const btnNao = document.getElementById("nao")
const btnSim = document.getElementById("sim")
const overlay = document.getElementById('overlay');

const tabelaBody = document.getElementById('tabelaBody')

const divCriar = document.getElementById("divCriar")
const divMostrar = document.getElementById("divMostrar")
const divExcluir = document.getElementById("divExcluir")
const divConfirmacao = document.getElementById("divConfirmacao")

let chaveParaExcluir = null

;btnCriar.addEventListener('click', () => {
    divMostrar.classList.add('escondido');
    divMostrar.classList.remove('aparecer-animacao'); 

    divCriar.classList.remove('escondido');
    divCriar.classList.add('aparecer-animacao');
})

btnSalvar.addEventListener("click", (event) => {
    event.preventDefault()
    msgErro.style.color = 'red'

    if (senha1.value !== senha2.value) {
        msgErro.innerText = 'As senhas estão diferentes'
    } else if (conta.value.length === 0) {
        msgErro.innerText = 'Digite o nome da conta'
    } else if (senha1.value.length === 0) {
        msgErro.innerText = 'Digite a senha da sua conta'
    } else if (conta.value.length < 3) {
        msgErro.innerText = 'O nome da conta é muito pequeno'
    } else if (senha1.value.length < 6) {
        msgErro.innerText = 'A senha é muito curta'
    } else if (localStorage.getItem(conta.value) != null) {
        msgErro.innerText = 'Essa conta já existe!'
    } else {
        msgErro.style.color = 'green';
        msgErro.innerText = 'Conta Criada com Sucesso!';
        localStorage.setItem(conta.value, senha1.value);
        
        // CORREÇÃO AQUI:
        setTimeout(() => {
            // 1. Inicia o desaparecimento (adiciona 'escondido')
            divCriar.classList.add('escondido');
            // 2. Remove o estado de visibilidade total ('aparecer-animacao')
            divCriar.classList.remove('aparecer-animacao'); 
            msgErro.innerText = ''
            formCadastro.reset()

        }, 2000)
    }
})

btnMostrar.addEventListener("click", () => {
    divCriar.classList.add('escondido');
    divCriar.classList.remove('aparecer-animacao'); 

    divMostrar.classList.remove('escondido');
    divMostrar.classList.add('aparecer-animacao');
    
    tabelaBody.innerHTML = ''

    for (let i = 0; i < localStorage.length; i++) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const btnExcluirLinha = document.createElement('button')

        let chave = localStorage.key(i)
        let valor = localStorage.getItem(chave)

        td1.innerText = chave
        td2.innerText = valor
        btnExcluirLinha.textContent = "Excluir"
        td3.appendChild(btnExcluirLinha)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tabelaBody.appendChild(tr)
        btnExcluirLinha.addEventListener('click', () => {
            chaveParaExcluir = chave 
            divConfirmacao.classList.remove("escondido")
            overlay.classList.add('visivel');
        })
    }
})
btnSim.addEventListener("click", () => {
    if (chaveParaExcluir) {
        localStorage.removeItem(chaveParaExcluir)
        chaveParaExcluir = null
        divConfirmacao.classList.add("escondido")
        overlay.classList.remove('visivel');
        btnMostrar.click()
    }
})

btnNao.addEventListener("click", () => {
    chaveParaExcluir = null
    divConfirmacao.classList.add("escondido")
    overlay.classList.remove('visivel');
})

function alternarVisibilidade(event, idDoInput) {
  const input = document.getElementById(idDoInput);
  const icone = event.target;

  if (input.type === "password") {
    input.type = "text";
    icone.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icone.classList.replace("fa-eye-slash", "fa-eye");
  }
}