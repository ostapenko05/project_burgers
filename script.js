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

////// слайдер в секции бургер
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function() {
  loop("right");
});
left.addEventListener("click", function() {
  loop("left");
});
function loop(direction) {
  if (direction === "right") {
    items.appendChild(items.firstElementChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}

///////////секция команды вертикальный аккордеон

const team = document.querySelector('.team'),
    teamMember = document.querySelectorAll('.team__member'),
    teamMemberLength = teamMember.length;

    team.addEventListener('click', function(e) {
    
    for (let i = 0; i < teamMemberLength; i++) {
        team[i].classList.remove('team__member--active');

    }
});

for (let i = 0; i < teamMemberLength; i++) {
    
    teamMember[i].addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (teamMember[i].classList.contains('team__member--active')) {
            teamMember[i].classList.remove('team__member--active')
        } else {
            for (let i = 0; i < teamMemberLength; i++) {
                teamMember[i].classList.remove('team__member--active');
            }
            teamMember[i].classList.add('team__member--active')
        }
    })
};

////////секция меню горизонтальный аккордеон
const menu = document.querySelector('.menu'),
    menuBlock = document.querySelectorAll('.menu__block'),
    menuBlockLength = menuBlock.length;

menu.addEventListener('click', function(e) {
    
    for (let i = 0; i < menuBlockLength; i++) {
        menu[i].classList.remove('menu__block--active');

    }
});

for (let i = 0; i < menuBlockLength; i++) {
    
    menuBlock[i].addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (menuBlock[i].classList.contains('menu__block--active')) {
            menuBlock[i].classList.remove('menu__block--active')
        } else {
            for (let i = 0; i < menuBlockLength; i++) {
                menuBlock[i].classList.remove('menu__block--active');
            }
            menuBlock[i].classList.add('menu__block--active')
        }
    })
};


// var menu = document.querySelectorAll('menu__block--active');

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