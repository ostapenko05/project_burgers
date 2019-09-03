//////////секция приветствия всплывающее полноэкранное меню

const hoverMenu = document.querySelector('#menu__section-close');
const hamburgerMenu = document.querySelector('#menu__hamb-act');
const cross = document.querySelector('#menu__cross');
const scroll = document.querySelector('body');


hamburgerMenu.addEventListener('click', function (e) {
    e.preventDefault();

    hoverMenu.style.display = 'block';
    scroll.style.overflow = 'hidden';
});

cross.addEventListener('click', function (e) {
    e.preventDefault();

    hoverMenu.style.display = 'none';
    scroll.style.overflow = 'auto';
});

///////////секция команды вертикальный аккордеон


////////секция меню горизонтальный аккордеон
const menu = document.querySelector('menu__content--active'),
    menuBlock = document.querySelectorAll('menu__block'),
    menuContentLength = menuContent.length;

menu.addEventListener('click', function (e) {
    
    for (let i = 0; i < menuContentLength; i++) {
        menu[i].classList.remove('menu__content--active');

    }
});

for (let i = 0; i < menuContentLength; i++) {
    
    menu[i].addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (menu[i].classList.contains('menu__content--active')) {
            menu[i].classList.remove('menu__content--active')
        } else {
            for (let i = 0; i < menuContentLength; i++) {
                menu[i].classList.remove('menu__content--active');
            }
            menu[i].classList.add('menu__content--active')
        }
    })
};


// var menu = document.querySelectorAll('menu__content--active');

// for (var i = 0; i < menu.length; i++) {
    
//     menu[i].addEventListener('click', function(e) {
//         e.preventDefault();
//         if (!(this.classList.contains('menu'))) {
//             for (var i = 0; i < menu.length; i ++) {
//                 menu[i].classList.remove('menu');
//             }
//             this.classList.add('menu');
//         }
//     })
// }