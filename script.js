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
/////////////////////// modal window reviews
const open = document.querySelector("#revbtn");
const rmx = document.querySelector("#x");
const rm = document.querySelector("#revmodal");
const bg = document.querySelector('body');

open.addEventListener('click', function (e) {
    e.preventDefault();
    rm.style.display = 'block';
    bg.style.overflow = 'hidden';
    // bg.style.background = '#2d3233';
});
rmx.addEventListener('click', function (e) {
    e.preventDefault();
    rm.style.display = 'none';
    bg.style.overflow = 'auto';
    // bg.style.background = 'none';
});

///////////////////////// валидация и запрос на сервер по форме

const myform = document.querySelector('#myform');
const send = document.querySelector('#send');
const formRow = document.querySelector(".form__row-block");



send.addEventListener('click', event => {
    event.preventDefault();
    if (validateForm(myform)) {
        const data = new FormData();
        data.append("name", myform.elements.name.value);
        // data.append("phone", myform.elements.phone.value);
        // data.append("street", myform.elements.street.value);
        // data.append("home", myform.elements.home.value);
        // data.append("sect", myform.elements.sect.value);
        // data.append("appartment", myform.elements.appartment.value);
        // data.append("level", myform.elements.level.value);
        // data.append("comment", myform.elements.comment.value);
        data.append("to", "my@gmail.com");

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', "https://webdev-api.loftschool.com/sendmail/fail");
        xhr.send(data);
        xhr.addEventListener('load', () => {
            if (xhr.response.status) {
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
                element4.classList.add("btn-send");
                element4.textContent = "Закрыть";

                element4.addEventListener('click', function () {
                    formRow.removeChild(element);
                });

            };
            send.disabled = false;
        });  
    };
});
function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    };
    return valid;
};
    // if (!validateField(form.elements.phone)) {
    //     valid = false;
    // }
    // if (!validateField(form.elements.street)) {
    //     valid = false;
    // }
    // if (!validateField(form.elements.home)) {
    //     valid = false;
    // }
    // if (!validateField(form.elements.sect)) {
    //     valid = false;
    // }
    // if (!validateField(form.elements.appartment)) {
    //     valid = false;
    // }
    // if (!validateField(form.elements.level)) {
    //     valid = false;
    // }
    // if (!validateField(form.elements.comment)) {
    //     valid = false;
    // }
    
// };
function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validstionMessage;
        return false;
    } else {
        field.nextElementSibling.textContent = "";
        return true;
    }
};





////////////ПЕРВЫЙ ВАРИАНТ
// const myform = document.querySelector('#myform');
// const send = document.querySelector('#send');

// send.addEventListener('click', event => {
//     event.preventDefault();

//     if (validateForm(myform)) {
//         const data = {
//             name: myform.elements.name.value,
//             phone: myform.elements.phone.value,
//             street: myform.elements.street.value,
//             home: myform.elements.home.value,
//             sect: myform.elements.sect.value,
//             appartment: myform.elements.appartment.value,
//             level: myform.elements.level.value,
//             comment: myform.elements.comment.value,
//         }

//         const xhr = new XMLHttpRequest();
//         xhr.responseType = 'json';
//         xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
//         xhr.send(data);
//         xhr.addEventListener('load', () => {
//             if (xhr.response.status);
//                 console.log('Всё ок!');
//         })
//     }
// })

// function validateForm(form) {
//     let valid = true;

//     if (!validateField(form.elements.name)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.phone)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.street)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.home)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.sect)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.appartment)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.level)) {
//         valid = false;
//     }

//     if (!validateField(form.elements.comment)) {
//         valid = false;
//     }
//     return valid;
// }

// function validateField(field) {
//     field.nextElementSibling.textContent = field.validstionmessage;
//     return field.checkValidity();
// }

