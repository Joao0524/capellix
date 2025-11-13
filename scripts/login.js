const perfis = document.getElementsByClassName('perfil');
const botaoEntrar = document.getElementById('botaoEntrar');
const divSenha = document.getElementById('divSenha');
const form = divSenha.querySelector('form'); 
const overlay = document.getElementById('overlay');

let perfilSelecionadoIndex = -1;

Array.from(perfis).forEach((perfil, index) => {
  perfil.addEventListener('click', () => {
    perfilSelecionadoIndex = index + 1;
    divSenha.classList.add('visivel');
    overlay.classList.add('visivel');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const inputSenha = document.getElementById('inputSenha').value.trim();
  const inputConta = document.getElementById('inputConta').value.trim();
  const msgErro = document.getElementById('msgErro');
  
  const credenciais = {
    1: { senha: '041685', conta: 'giorno' },
    2: { senha: '120607', conta: 'yoonchae' },
    3: { senha: 'S2S2S2', conta: 'gus' },
  }

  const perfil = credenciais[perfilSelecionadoIndex];

  if (!perfil) {
    msgErro.innerText = 'Nenhum perfil selecionado.';
    return;
  }

  if (inputConta !== perfil.conta) {
    msgErro.innerText = 'Conta incorreta.';
    return;
  }

  if (inputSenha !== perfil.senha) {
    msgErro.innerText = 'Senha incorreta.';
    return;
  }

  msgErro.innerText = '';
  divSenha.classList.remove('visivel');
  overlay.classList.remove('visivel');
  window.location.href = 'index.html';
});

document.addEventListener('click', (event) => {
  const clicouFora = 
    !divSenha.contains(event.target) && 
    !Array.from(perfis).some(perfil => perfil.contains(event.target));

  if (clicouFora) {
    divSenha.classList.remove('visivel');
    overlay.classList.remove('visivel');
  }
});

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
