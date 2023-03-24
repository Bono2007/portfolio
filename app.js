// Le JavaScript pour afficher ou cacher le modal
const modal = document.getElementById("modal-container");
const span = document.getElementsByClassName("close")[0];
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const modalImage2 = document.getElementById("modal-image2");
const modalVideo = document.getElementById("modal-video");
const modalSource = document.getElementById("modal-source");

// On boucle à travers tous les boutons "More" pour leur ajouter un gestionnaire d'événements onclick
const buttons = document.querySelectorAll(".legende-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    // Récupérer les informations de la vignette en utilisant les attributs de données HTML
    const title = buttons[i].getAttribute("data-title");
    const description = buttons[i].getAttribute("data-description");
    const image = buttons[i].getAttribute("data-image");
    const image2 = buttons[i].getAttribute("data-image2");
    const video = buttons[i].getAttribute("data-video");
    // Afficher le modal et mettre à jour les éléments HTML avec les informations de la vignette
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    //Partie image si présente :
    modalImage.src = image;
    //Partie image2 si présente
    modalImage2.src = image2;
    modalImage2.style.display = "none";
    if (image2) { //si la vignette contient une 2e image
      modalImage2.style.display = "block"; //afficher la 2e image
    }
    //Partie vidéo si présente :
    modalVideo.style.display = "none";
    if (video) { // si la vignette contient une vidéo
      modalSource.src = video;
      modalVideo.style.display = "block"; // afficher la vidéo
      modalVideo.load(); // charger la vidéo
    }
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
