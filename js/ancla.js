document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".main-nav__menu__item");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      // Evitar que el enlace realice la navegación
      event.preventDefault();
      // Obtener el valor del atributo href y desplazarse a esa sección
      let targetSectionId = item
        .querySelector(".main-nav__menu__item__link")
        .getAttribute("href")
        .substring(1);
      document.getElementById(targetSectionId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".contact-section__item");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
     // Evitar que el enlace realice la navegación
     event.preventDefault();

     // Obtener el valor del atributo href
     let targetUrl = item.querySelector('.contact-section__link').getAttribute('href');

     // Abrir la URL en una nueva pestaña
     window.open(targetUrl, '_blank');
    });
  });
});
