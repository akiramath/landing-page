let btns = document.querySelectorAll('.btn_cate');
let divCates = document.querySelectorAll('.div_imgs_cates');
let imgs = ['imgs/livro_romance.jpg', 'imgs/livro_terror.jpg', 'imgs/livro_infantil.jpg']

//colocando imgs nas div de categorias
divCates.forEach((div, index) => {
    console.log(div)
    div.style.backgroundImage = `url(${imgs[index]})`;
});

//subindo as div quando passar o mouse nos botoes
btns.forEach((btn, index) => {

    btn.addEventListener('mouseover', () => {
        divCates[index].style.transform = 'translateY(-50px)';
    });

    btn.addEventListener('mouseout', () => {
        divCates[index].style.transform = 'translateY(0)';
    });
});

//login

let login = document.getElementById('login');

function conta() {
    if (window.innerWidth > 930) {
        if (login.style.display == 'none') {
            login.style.display = 'block';
        } else {
            login.style.display = 'none';
        };
    } else {
        let ins = document.querySelector('.inscrevase');
        ins.scrollIntoView({ behavior: 'smooth' })
    }
};


//menu hamburguer

let ham = document.getElementById('ham');
let ins = document.getElementById('ins');
let originalContent = ins.innerHTML;

window.onresize = () => {
    if (window.innerWidth < 930) {
        ham.style.display = 'block';
        login.style.display = 'none'
    } else {
        ham.style.display = 'none';
    };

    // arrumando a nav e arrumando o login para o tamanho de 930
    navs.forEach(nav => {
        if (window.innerWidth < 930) {
            nav.style.display = 'none';
            ins.innerHTML = login.innerHTML;
        } else {
            nav.style.display = 'flex';
            console.log(nav)
            ins.innerHTML = originalContent;
        };
    });
};

//aparecer e esconder a nav

let navs = document.querySelectorAll('.navs');

function menu() {

    navs.forEach(nav => {
        if (nav.style.display == 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    });
}
