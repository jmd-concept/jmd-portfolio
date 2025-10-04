
// Settings
document.addEventListener("DOMContentLoaded", () => {

  // Affiche la version
  document.querySelector(".version").textContent = "v0.1.3";
  document.querySelector(".version-footer").textContent = "v0.1.3";

  // Affiche automatiquement l'année courante
  document.getElementById("date").textContent = new Date().getFullYear();
})

/*  Menu au formant mobile (Gestion de la responsivité ) */
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".menu");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.querySelector(".nav-list");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener('click', () => {
    // toggle menu mobile
    navLinks.classList.toggle('mobile-menu');
    document.body.classList.toggle('no-scroll');
    navbar.classList.remove('scroller');

    /** Changer l'icône */
    if (navLinks.classList.contains('mobile-menu')) {
      // menu ouvert → croix
      menuIcon.classList.remove('fa-reorder');
      menuIcon.classList.add('fa-fa-solid');
    } else {
      // menu fermé → hamburger
      menuIcon.classList.remove('fa-solid');
      menuIcon.classList.add('fa-reorder');
    }

  }); //menuIcon.textContent = menuIcon.textContent === '✖' ? '☰' : '✖';

  //Fermer le menu quand on clique hors du menu
  document.addEventListener('click', async (e) => {
    // si clic hors navLinks et hors bouton menu
    if (
      navLinks.classList.contains('mobile-menu') &&
      !navLinks.contains(e.target) &&
      !menu.contains(e.target)
    ) {
      navLinks.classList.remove('mobile-menu');
      document.body.classList.remove('no-scroll');
      // réinitialiser l’icône
      menuIcon.classList.remove('fa-solid');
      menuIcon.classList.add('fa-reorder');
    }
  });
});

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

/*  Evenement au préchargement de la page */
/*
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

});*/