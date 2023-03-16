function showImage(button) {
    const imageSrc = button.getAttribute('data-image'); //Transforme l'image en bouton
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.querySelector('.overlay-image');
    overlay.addEventListener('click', hideImage);  //Ajoute un écouteur d'événement qui va lancer la fonction hideImage() au clic
    
    overlayImage.src = imageSrc;
    overlay.classList.add('show');
    overlay.classList.remove('hide');
  }

  function hideImage() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hide');
    overlay.classList.remove('show');
  }

  // Le JavaScript pour afficher ou cacher le modal
const modal = document.getElementById("modal-container");
const span = document.getElementsByClassName("close")[0];
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");

// On boucle à travers tous les boutons "More" pour leur ajouter un gestionnaire d'événements onclick
const buttons = document.querySelectorAll(".legende-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    // Récupérer les informations de la vignette en utilisant les attributs de données HTML
    const title = buttons[i].getAttribute("data-title");
    const description = buttons[i].getAttribute("data-description");
    const image = buttons[i].getAttribute("data-image");
    // Afficher le modal et mettre à jour les éléments HTML avec les informations de la vignette
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;
    modal.style.display = "block";
  }
}

// Ajouter des gestionnaires d'événements onclick pour le bouton de fermeture et l'arrière-plan du modal

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const closeFleche = document.querySelector('.closefleche');
closeFleche.onclick = function() {
  modal.style.display = 'none';
}
