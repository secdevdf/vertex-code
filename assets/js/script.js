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
            cardsContainer.classList.add('active');
        }
    }

    // Executa a função logo que a página carrega para mostrar o serviço pré-selecionado
    window.onload = function() {
        displayCards();
    }
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const navbarLinks = document.querySelector('.navbar ul');
    
        menuToggle.addEventListener('click', function () {
            navbarLinks.classList.toggle('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Detecta se é um dispositivo móvel pelo user agent ou pela largura da tela
        function isMobile() {
            return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth <= 1024;
        }
    
        if (isMobile()) {
            // Redireciona para m.index.html caso seja um dispositivo móvel
            window.location.href = 'm.index.html';
        }
    });
    