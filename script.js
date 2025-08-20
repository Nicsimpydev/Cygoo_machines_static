document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne la modale et les éléments nécessaires
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const span = document.getElementsByClassName("close")[0];
    alert (1)

    // Gère l'ouverture de la modale au clic sur une image
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.dataset.full;
        });
    });

    // Gère la fermeture de la modale au clic sur le bouton 'x'
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Gère la fermeture de la modale au clic en dehors de l'image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});