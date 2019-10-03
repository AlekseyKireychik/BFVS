document.addEventListener("DOMContentLoaded", () => {
  // is-active menu link

  let location = window.location.href;
  let url_value = location.split("/").pop();
  $(".header__list-nav a").each(function() {
    let link = $(this)
      .attr("href")
      .split("/")
      .pop();
    if (url_value == link) {
      $(this).addClass("is-active");
    }
  });

  //searc-btn

  let btn_search = document.querySelector(".search__btn");

  btn_search.addEventListener("click", () => {
    document.querySelector(".search__formwrap").classList.toggle("is-active");
  });

  //burger-menu

  let burgerButton = document.querySelector(".burger-menu__button");

  burgerButton.addEventListener("click", () => {
    let burgerMenu = document.querySelector(".burger-menu");

    burgerMenu.classList.toggle("is-active");

    let list = document.querySelector(".header__list-nav");

    list.classList.toggle("is-active");

    let burgerOverlay = document.querySelector(".burger-menu__overlay");

    burgerOverlay.classList.toggle("is-active");
  });
});
