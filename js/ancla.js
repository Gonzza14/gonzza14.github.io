document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.main-nav__menu__item');

    menuItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        // Evitar que el enlace realice la navegación
        event.preventDefault();

        // Remover la clase 'active' de todos los elementos del menú
        menuItems.forEach(function (item) {
          item.classList.remove('active');
        });

        // Agregar la clase 'active' al elemento clicado
        item.classList.add('active');

        // Obtener el valor del atributo href y desplazarse a esa sección
        var targetSectionId = item.querySelector('.main-nav__menu__item__link').getAttribute('href').substring(1);
        document.getElementById(targetSectionId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });