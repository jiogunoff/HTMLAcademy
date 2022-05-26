(() => {
  const navButton = document.querySelector("#menu-button");
  const navList = document.querySelector("#menu-list");

  navButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    navList.classList.toggle("showed");
    navButton.classList.toggle("crossed");
  });
})();
