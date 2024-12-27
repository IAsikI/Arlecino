const navToggle = document.getElementById("nav-toggle");
const menu = document.getElementById("menu");

// Показать/скрыть меню при нажатии на кнопку
navToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // Останавливаем всплытие события
  menu.classList.toggle("hidden");
});

// Скрыть меню при нажатии на пункт меню
menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.classList.add("hidden");
  }
});

// Скрыть меню при нажатии вне его области
document.addEventListener("click", () => {
  menu.classList.add("hidden");
});
 