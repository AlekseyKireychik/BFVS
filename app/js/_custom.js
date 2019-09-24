document.addEventListener("DOMContentLoaded", function(){

    let btn_search = document.querySelector('.search__btn');

    btn_search.addEventListener("click", searchShow);

    function searchShow() {

        document.querySelector('.search__formwrap').style.disply = "block";

    };
    

    let burgerButton = document.querySelector(".burger-menu__button");

    burgerButton.addEventListener("click", menuShow);

    function menuShow() {

        document.querySelector(".header__nav").style.disply = "block";
        document.querySelector(".header__list").style.height = "auto";
        document.querySelector(".burger-menu").classList.add(".burger-menu__active");

    };

    function menuHide() {

        document.querySelector(".header__nav").style.disply = "none";
        document.querySelector(".header__list").style.height = "0px";
        document.querySelector(".burger-menu").classList.remove(".burger-menu__active");

    };
	
});
