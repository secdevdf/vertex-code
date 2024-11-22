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