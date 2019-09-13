//////////секция приветствия всплывающее полноэкранное меню
const hoverMenu = document.querySelector('#menu__section-close');
const hamburgerMenu = document.querySelector('#menu__hamb-act');
const cross = document.querySelector('#menu__cross');
const scroll = document.querySelector('body');
const navHover = document.querySelectorAll('.nav__link-hover');


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
const team = document.querySelector('.team'),
    teamMember = document.querySelectorAll('.team__member'),
    teamMemberLength = teamMember.length;
team.addEventListener('click', function (e) {
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

menu.addEventListener('click', function (e) {
    for (let i = 0; i < menuBlockLength; i++) {
        menuBlock[i].classList.remove('menu__block--active');
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
/////////////////////// modal window reviews


const reviews = document.querySelector('.reviews'),
    overlay = document.querySelector('.reviews__fon'),
    popupText = document.querySelector('.popup__text'),
    bg = document.querySelector('body'),
    rmx = document.querySelector("#x");



reviews.addEventListener('click', e => {
    let elem = e.target;
    bg.style.overflow = 'hidden';

    if (elem.tagname = '.reviews__btn') {
        let modalText = elem.previousElementSibling.innerHTML;
        popupText.innerHTML = modalText;
        overlay.style.display = 'block';
    };
});
rmx.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.style.display = 'none';
    bg.style.overflow = 'auto';

});

///////////////////////// валидация и запрос на сервер по форме

const myform = document.querySelector("#myform");
const send = document.querySelector("#send");
const formRow = document.querySelector(".form__row-block");

send.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm(myform)) {
        let data = new FormData;
        data.append("name", myform.elements.name.value);
        data.append("phone", myform.elements.phone.value);
        data.append("street", myform.elements.street.value);
        data.append("home", myform.elements.home.value);
        data.append("sect", myform.elements.sect.value);
        data.append("appartment", myform.elements.appartment.value);
        data.append("comment", myform.elements.comment.value);
        data.append("to", "my@gmail.com");

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(data);
        xhr.addEventListener('load', () => {
            if (xhr.response.status == 1) {
                const element = document.createElement("div");
                formRow.appendChild(element);
                element.classList.add("message__modal");

                const element2 = document.createElement("div");
                element.appendChild(element2);
                element2.classList.add("message__send");

                const element3 = document.createElement("div");
                element2.appendChild(element3);
                element3.classList.add("message__text");
                element3.textContent = "Сообщение отправленно";

                const element4 = document.createElement("button");
                element2.appendChild(element4);
                element4.classList.add("btn");
                element4.textContent = "Закрыть";

                element4.addEventListener('click', function () {
                    formRow.removeChild(element);
                });
            }
            else {
                const element = document.createElement("div");
                formRow.appendChild(element);
                element.classList.add("message__modal");

                const element2 = document.createElement("div");
                element.appendChild(element2);
                element2.classList.add("message__send");

                const element3 = document.createElement("div");
                element2.appendChild(element3);
                element3.classList.add("message__text");
                element3.textContent = "Сообщение не отправленно";

                const element4 = document.createElement("button");
                element2.appendChild(element4);
                element4.classList.add("btn");
                element4.textContent = "Закрыть";

                element4.addEventListener('click', function () {
                    formRow.removeChild(element);
                });
            }
            send.disabled = false;
        });
    }
});

function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    };
    if (!validateField(form.elements.phone)) {
        valid = false;
    };
    if (!validateField(form.elements.street)) {
        valid = false;
    };
    if (!validateField(form.elements.home)) {
        valid = false;
    };
    if (!validateField(form.elements.sect)) {
        valid = false;
    }
    if (!validateField(form.elements.appartment)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
};

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    } else {
        field.nextElementSibling.textContent = "";
        return true;
    }
};

/////////// стили инпутов

const phone = document.querySelector('#formphone');

phone.addEventListener('keydown', function (e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    let isBackspace = false;

    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }
    if (e.key == '-') {
        isDash = true;
    }

    if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
        isControl = true;
    }

    if (e.key == 'Backspace') {
        isBackspace = true;
    }

    if (!isDigit && !isDash && !isControl && !isBackspace) {
        e.preventDefault();
    }
})

const formjustNumber = document.querySelector('#formjustNumber');

formjustNumber.addEventListener('keydown', function (e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    let isBackspace = false;

    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }
    if (e.key == '-') {
        isDash = false;
    }

    if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
        isControl = true;
    }

    if (e.key == 'Backspace') {
        isBackspace = true;
    }

    if (!isDigit && !isDash && !isControl && !isBackspace) {
        e.preventDefault();
    }
})

const formNumber = document.querySelector('#formNumber');

formNumber.addEventListener('keydown', function (e) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    let isBackspace = false;

    if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
    }
    if (e.key == '-') {
        isDash = false;
    }

    if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
        isControl = true;
    }

    if (e.key == 'Backspace') {
        isBackspace = true;
    }

    if (!isDigit && !isDash && !isControl && !isBackspace) {
        e.preventDefault();
    }
})

////// слайдер в секции бургер
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function () {
    loop("right");
});
left.addEventListener("click", function () {
    loop("left");
});
function loop(direction) {
    if (direction === "right") {
        items.appendChild(items.firstElementChild);
    } else {
        items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
}

////слайдер на jqwery


// $(function () {

//     var coloringDots = function (index) {
//         $('.slider')
//             .find('.slider__dot-item')
//             .eq(index)
//             .addClass('active')
//             .siblings()
//             .removeClass('active');
//     }

//     var generateDots = function () {
//         $('.slider').each(function () {
//             var dot = $('<li>', {
//                 attr: {
//                     class: 'slider__dot-item'
//                 },
//                 html: '<div class="slider__dot-circle"></div>'
//             });

//             $('.slider__dots').append(dot);
//         })
//     };

//     generateDots();

//     var moveSlide = function (container, slideNum) {
//         var items = container.find('.section__slider'),
//             activeSlide = items.filter('.active'),
//             reqItem = eq(slideNum),
//             reqIndex = reqItem.index(),
//             list = container.find('.items'),
//             duration = 1000;

//         if (reqItems.length) {
//             list.animate({
//                 'left': -regIndex * 100 + '%'
//             }, duration, function () {
//                 activeSlide.removeClass('active');
//                 reqItem.addClass('active');
//                 coloringDots(slideNum);
//             });
//         }
//     }
//     $('.slider__btn').on('click', function (e) {
//         e.preventDefault();
//         var $this = $(this),
//             container = $this.closest('.slider'),
//             items = $('.section__slider', container),
//             activeItem = items.filter('.active'),
//             existedItem, edgeItem, reqItem;

//         if ($this.hasclass('arrow-scroll-right')) {
//             existedItem = activeItem.next();
//             edgeItem = items.first();
//         }

//         if ($this.hasclass('arrow-scroll-left')) {
//             existedItem = activeItem.prev();
//             edgeItem = items.last();
//         }
//         reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
//         moveSlide(container, reqItem);
//     })

//     $('body').on('click' '.slider__dot-item', function () {
//         var $this = $(this),
//             container = $this.closest('.slider'),
//             index = $this.index();

//         moveSlide(container, index);
//         coloringDots(index);
//     })
// });

//dots 

//создание точек
$(function(){
    var generateDots = function () {
 
       $('.section').each(function () {
          let dot = $('<li>', {
             attr : {
                class: 'fixed-menu__item'
             },
             html : '<button type="button" class="fixed-menu__dot"></button>'
          });
 
          $('.fixed-menu').append(dot);
       })
    }
 
    generateDots();
    $('.fixed-menu__item').eq(0).addClass('fixed-menu__item--active');

})

$(window).on('load', function() {

//функционал точек

    $('.fixed-menu__item').on('click', function() {

    $(this).addClass('fixed-menu__item--active');
    $(this).siblings().removeClass('fixed-menu__item--active');
 
       $('html, body').animate({
          'scrollTop': $('.section').height() * $(this).index()
       }, 1000)
 
    });

//присвоение активного класса    

/// button arrowScroll

$('.arrow-scroll__btn').on('click', e => {
    $('html, body').animate ({
        'scrollTop': $('.section--block-two').offset().top
    }, 1000)
});
//// стили по меню и кнопкам
$('.nav__section-button').on('click', e => {
    $('html, body').animate ({
        'scrollTop': $('.form').offset().top
    }, 1000)
});

$('.btn-price').on('click', e => {
    $('html, body').animate ({
        'scrollTop': $('.form').offset().top
    }, 1000)
});

$('.nav__link-hover').on('click', function() {
    $('body').css({
        'overflow':'auto'
    });
    $('.menu__section-hover').css({
        'display':'none'
    });
});






});
