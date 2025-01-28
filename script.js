// Получаем элементы навигации
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Добавляем обработчик события на кнопку
hamburger.addEventListener("click", () => {
  // Переключаем классы для открытия/закрытия меню
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Опционально: закрытие меню при клике на ссылку (для UX)
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});
