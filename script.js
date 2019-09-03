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
// const menu = document.querySelector('section--menu'),
//     menuBlock = document.querySelectorAll('menu__block'),
//     menuBlockLenth = menuBlock.length;

// menu.addEventListener('click', function (e) {
//     e.preventDefault();
//     for (let i = 0; i < menuBlockLength; i++) {
//         menuBlock[i].classList.remove('menu__block--active');

//     }
// });

// for (let i = 0; i < menuBlockLength; i++) {
//     e.preventDefault();
//     menuBlock[i].addEventListener('click', function (e) {
//         e.stopPropagation();
//         e.preventDefault();

//         if (menuBlock[i].classList.contains('menu__block--active')) {
//             menuBlock[i].classList.remove('menu__block--active')
//         } else {
//             for (let i = 0; i < menuBlockLength; i++) {
//                 menuBlock[i].classList.remove('menu__block--active');
//             }
//             menuBlock[i].classList.add('menu__block--active')
//         }
//     })
// };


var menu = document.querySelectorAll('menu__block');

for (var i = 0; i < menu.length; i++) {
    
    menu[i].addEventListener('click', function(e) {
        e.preventDefault();
        if (!(this.classList.contains('active'))) {
            for (var i = 0; i < menu.length; i ++) {
                menu[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}