
const overlayy = document.getElementById('loading-overlay');
const site = document.getElementById('site');
const progressBar = document.querySelector('.progress-bar');

if (site) site.style.display = 'none';


function restartProgressBar() {
    if (!progressBar) return; 
        progressBar.style.animation = 'none';
    progressBar.offsetHeight; 
    progressBar.style.animation = 'fillProgress 2s ease-in-out forwards'; 
}

window.addEventListener('load', () => {
    overlayy.classList.remove('hidden');
    if (site) site.style.display = 'none';

    setTimeout(() => {
        restartProgressBar();
    }, 50); 
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
