const hoverMenu = document.querySelector('#menu__section-close');
const hamburgerMenu = document.querySelector('#menu__hamb-act');
const cross = document.querySelector('#menu__cross');
 

hamburgerMenu.addEventListener('click',function (e){
    e.preventDefault();

    hoverMenu.style.display = 'block';
});

cross.addEventListener('click',function (e){
    e.preventDefault();

    hoverMenu.style.display = 'none';
});

