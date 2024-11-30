document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cards dentro do container .boxes
    const productCards = document.querySelectorAll('.boxes .card');

    productCards.forEach(card => {
        const colorButtons = card.querySelectorAll('.color-button');
        const images = card.querySelectorAll('.product-image');

        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const imageIndex = button.getAttribute('data-image');

                // Atualizar o atributo 'data-active' nas imagens
                images.forEach((img, index) => {
                    if (index == imageIndex) {
                        img.setAttribute('data-active', 'true');
                        img.style.display = 'block'; // Exibe a imagem ativa
                    } else {
                        img.removeAttribute('data-active');
                        img.style.display = 'none'; // Oculta as demais imagens
                    }
                });
            });
        });

        // Inicialização: mostrar apenas a imagem ativa
        images.forEach((img) => {
            if (img.getAttribute('data-active') === 'true') {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});
