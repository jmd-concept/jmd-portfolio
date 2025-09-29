
/*  Evenement au préchargement de la page */

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("prechargement");
  const content = document.querySelector(".home-bloc");

  // Masquer le préchargeur avec effet fondu
  preloader.classList.add("fade-out");

  // Quand l'animation du préchargeur est terminée
  preloader.addEventListener('load', () => {
    preloader.style.display = 'none';
    // Afficher le contenu avec fondu
    content.classList.add("visible");
  });
});

/*  Menu au formant mobile (Gestion de la responsivité ) */

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".menu")
  const navLinks = document.querySelector(".nav-list");

  const navbar = document.querySelector(".navbar");

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    document.body.classList.toggle('no-scroll');

    navbar.classList.remove('scroller');
  })

})

/** Action au survol de l'écran ou scrol */

window.addEventListener('scroll', function () {
  // Déclencher une action CSS en fonction de window.pageYOffset
  const navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 150) {
    navbar.classList.add('scroller'); //on ajoute .scrolled à .navbar
  } else {
    navbar.classList.remove('scroller');
  }
});

//Fichiers
document.getElementsByClassName("fichier").addEventListener("click", () => {
  document.getElementById("message").textContent = "Page d'informations pour l'instant"
})

//Date Copy right
document.getElementById("date").textContent = new Date().getFullYear();
