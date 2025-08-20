document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.querySelector('.modal-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Ajout d'un événement 'click' sur chaque image de la galerie
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modalImage.src = item.src;
            modal.classList.add('is-active');
        });
    });

    // Gestion de la fermeture de la modale
    function closeModal() {
        modal.classList.remove('is-active');
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        // Ferme la modale si on clique sur l'arrière-plan
        if (event.target.classList.contains('modal-background')) {
            closeModal();
        }
    });

    // Fermeture avec la touche 'Echap'
    document.addEventListener('keydown', (event) => {
        if(event.key === "Escape") {
            closeModal();
        }
    });
});