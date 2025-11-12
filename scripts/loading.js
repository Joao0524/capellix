// ===== Tela de carregamento para tudo =====

// Pega referências
const overlay = document.getElementById('loading-overlay');
const site = document.getElementById('site');
const progressBar = document.querySelector('.progress-bar');

// Garante que o conteúdo não apareça antes do carregamento inicial
if (site) site.style.display = 'none';

// Função para reiniciar a animação da barra
function restartProgressBar() {
    if (!progressBar) return;
    progressBar.style.animation = 'none';
    progressBar.offsetHeight; // força reflow (reinicia o CSS)
    progressBar.style.animation = null;
}

// Carregamento inicial ao entrar na página
window.addEventListener('load', () => {
    restartProgressBar();
    setTimeout(() => {
        overlay.classList.add('hidden');
        site.style.display = 'block';
    }, 2000);
});

// Carregamento ao sair (clicar em link)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const url = link.getAttribute('href');

        // Ignora âncoras (#) e links vazios
        if (!url || url.startsWith('#')) return;

        e.preventDefault();

        // Reinicia a animação
        restartProgressBar();

        // Mostra overlay e esconde conteúdo
        overlay.classList.remove('hidden');
        site.style.display = 'none';

        // Espera 1 segundo e redireciona
        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    });
});
