document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-button');
    const colorGroups = document.querySelectorAll('.color-group');
    const mainImage = document.getElementById('mainImage');

    // Função para atualizar a imagem principal
    const updateMainImage = (src) => {
        mainImage.src = src;
    };

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Oculta todas as imagens das cores
            colorGroups.forEach(group => group.style.display = 'none');

            // Mostra a imagem correspondente ao botão clicado
            const color = button.getAttribute('data-color');
            const selectedGroup = document.querySelector(`.color-group[data-color="${color}"]`);
            if (selectedGroup) {
                selectedGroup.style.display = 'flex';

                // Muda a imagem principal para a primeira da nova cor
                const firstImage = selectedGroup.querySelector('img').src;
                updateMainImage(firstImage);
            }
        });
    });

    // Efeito de hover nas miniaturas e troca de imagem ao clicar
    const productImages = document.querySelectorAll('.product-image-small');

    productImages.forEach(image => {
        // Efeito de hover
        image.addEventListener('mouseover', () => {
            image.style.filter = 'grayscale(10%)';
        });

        image.addEventListener('mouseout', () => {
            image.style.filter = 'none';
        });

        // Atualiza a imagem principal ao clicar na miniatura
        image.addEventListener('click', () => {
            updateMainImage(image.src);
        });
    });
});
