document.addEventListener("DOMContentLoaded", function() {
  $(function() {
    var location = window.location.href;
    console.log(location);
    var cur_url = location.split("/").pop();
    console.log(cur_url);

    $(".header__list-nav a").each(function() {
      var link = $(this).attr("href");

      if (cur_url == link) {
        $(this).addClass("current");
      }
    });
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
