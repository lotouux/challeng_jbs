document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões de curtir
    const likeButtons = document.querySelectorAll('.btn-like');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postElement = this.closest('.feed-post-full');
            const likeCountElement = postElement.querySelector('.like-count-text');
            let currentLikes = parseInt(likeCountElement.textContent);

            if (this.classList.contains('liked')) {
                // Descurtir
                this.classList.remove('liked');
                currentLikes--;

                // Atualiza o texto do botão
                this.innerHTML = '<i class="bi bi-heart"></i><i class="bi bi-heart-fill"></i> Curtir';
            } else {
                // Curtir
                this.classList.add('liked');
                currentLikes++;

                // Atualiza o texto do botão para "Curtido"
                this.innerHTML = '<i class="bi bi-heart"></i><i class="bi bi-heart-fill"></i> Curtido';
            }

            // Atualiza a contagem de curtidas
            likeCountElement.textContent = currentLikes;
        });
    });
    
    document.getElementById('feed-page').style.display = 'block';

});