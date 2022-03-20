// sticky NAVBAR / burger
// const hamburger = document.querySelector("#hamburger");
//     popup = document.querySelector("#popup");
//     menu = document.querySelector("#menu").cloneNode(1);
//     body = document.body;

// hamburger.addEventListener("click", hamburgerHandler);

// function hamburgerHandler(e) {
//     e.preventDefault();
//     popup.classList.toggle("open");
//     hamburger.classList.toggle("active");
//     body.classList.toggle("noscroll");
//     renderPopup();
// }

// function renderPopup() {
//     document.querySelectorAll("#menu").forEach((menu) => {
//         popup.appendChild(menu);
//         menu.classList.toggle('hamburger-menu');
//     });
// }
const hamburger = document.querySelector("#hamburger");
    body = document.body;
    popup = document.querySelector("#popup");
    cloneNodes = [];

hamburger.addEventListener("click", hamburgerHandler);

function hamburgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamburger.classList.toggle("active");
    cloneNodes.length ? unmountPopup() : renderPopup();
    body.classList.toggle("noscroll");
}

function unmountPopup() {
    cloneNodes.forEach(node => node.remove());
    cloneNodes.length = 0;
}

function renderPopup() {
    document.querySelectorAll("#menu").forEach((menu) => {
        const cloneMenu = menu.cloneNode(true);
        cloneNodes.push(cloneMenu);
        popup.appendChild(cloneMenu);

        cloneMenu.className = 'hamburger-menu';
    });
}

const links = Array.from(cloneMenu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});





//   Slider
window.onload=function() {
const slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    slidesWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});



const interval = setInterval(nextSlide, 2500);

}

