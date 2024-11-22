document.addEventListener('DOMContentLoaded', function () {
    // Função para exibir os cards de produto específicos para cada serviço
    function displayCards() {
        // Oculta todos os cards
        var allCardsContainers = document.querySelectorAll('.cards-container');
        allCardsContainers.forEach(function(container) {
            container.classList.remove('active');
        });

        // Obtém o valor do serviço selecionado
        var serviceSelect = document.getElementById('serviceSelect');
        var selectedService = serviceSelect.value;

        // Exibe os cards do serviço selecionado
        if (selectedService) {
            var cardsContainer = document.getElementById(selectedService + '-cards');
            if (cardsContainer) {
                cardsContainer.classList.add('active');
            }
        }
    }

    // Exibir os cards do serviço selecionado inicialmente
    displayCards();

    // Adiciona o evento de alteração ao seletor
    var serviceSelect = document.getElementById('serviceSelect');
    serviceSelect.addEventListener('change', displayCards);

    // Slider Automático
    const slides = document.querySelector('.slides');
    let slideIndex = 0;

    function showNextSlide() {
        slideIndex++;
        if (slideIndex >= slides.children.length) {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(showNextSlide, 4000);
});
document.addEventListener('DOMContentLoaded', function() {
// Detectar se é desktop pelo user agent ou largura da tela
function isDesktop() {
return window.innerWidth > 1024; // Tamanho da largura típico de desktop
}

if (isDesktop()) {
// Redireciona para index.html caso seja um desktop
window.location.href = 'index.html';
}
});
        // Seleciona o botão do menu e a lista de navegação
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.querySelector('.nav-list');

        // Adiciona um event listener para abrir ou fechar o menu quando clicado
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            navList.classList.toggle('collapsed');
        });