
const hamMenu = document.querySelector(".ham-menu");//Sélectionne "ham-menu" 

const offScreenMenu = document.querySelector(".off-screen-menu");// Sélectionne "off-screen-menu"

// Ajoute un écouteur d'événements "click" à l'élément "hamMenu". Lorsqu'un clic est détecté,
// il exécute la fonction anonyme passée en argument.
hamMenu.addEventListener("click", () => {

  // Utilise la méthode toggle() sur la propriété classList de "hamMenu" pour ajouter ou supprimer la classe "active"
  // si elle n'est pas déjà présente. Cela permet de basculer entre deux états visuels (actif/inactif).
  hamMenu.classList.toggle("active");

  
  offScreenMenu.classList.toggle("active");// Fait de même pour "offScreenMenu", bascule également sa classe "active"
});
