// Sélectionne tous les boutons de discussion
const boutonsDiscussion = document.querySelectorAll('.bouton-discussion');

boutonsDiscussion.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const reflexion = bouton.previousElementSibling; // Sélectionne la section de réflexion
        if (reflexion.style.display === 'none' || !reflexion.style.display) {
            reflexion.style.display = 'block';
            bouton.textContent = 'Masquer les questions';
        } else {
            reflexion.style.display = 'none';
            bouton.textContent = 'Partager votre avis';
        }
    });
});
