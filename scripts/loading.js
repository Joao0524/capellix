// ===== Tela de carregamento para tudo =====

// Pega referências
const overlayy = document.getElementById('loading-overlay');
const site = document.getElementById('site');
const progressBar = document.querySelector('.progress-bar');

// Garante que o conteúdo não apareça antes do carregamento inicial
if (site) site.style.display = 'none';

// Função para reiniciar a animação da barra
// Função para reiniciar a animação da barra
function restartProgressBar() {
    if (!progressBar) return; 
    
    // 1. Remove a animação
    progressBar.style.animation = 'none';
    
    // 2. Força o reflow (o navegador recalcula o estilo)
    // Isso é essencial para que a remoção da animação seja aplicada.
    progressBar.offsetHeight; 
    
    // 3. Reaplica a animação com o nome e duração originais.
    // É mais seguro do que usar 'null', pois garante que as propriedades originais sejam reaplicadas.
    progressBar.style.animation = 'fillProgress 2s ease-in-out forwards'; 
}

// Carregamento inicial ao entrar na página
window.addEventListener('load', () => {
    // Mostra o overlay primeiro
    overlayy.classList.remove('hidden');
    if (site) site.style.display = 'none';

    // Espera um pequeno tempo pra garantir que o overlay renderize
    setTimeout(() => {
        restartProgressBar();
    }, 50); // 50ms bastam pra o navegador desenhar o elemento

    // Depois remove o overlay
    setTimeout(() => {
        overlayy.classList.add('hidden');
        if (site) site.style.display = 'block';
    }, 2500);
});


// Carregamento ao sair (clicar em link)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const url = link.getAttribute('href');
        if (!url || url.startsWith('#')) return;

        e.preventDefault();

        restartProgressBar();
        overlayy.classList.remove('hidden');
        if (site) site.style.display = 'none';

        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    });
});
