// sticky NAVBAR / burger
const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");
// тут будем хранить клоны нашего меню
const cloneNodes = [];

hamburger.addEventListener("click", hamburgerHandler);

function hamburgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamburger.classList.toggle("active");
    // если меню открыто и мы хотим его закрыть вызываем unmountPopup (cloneNodes.length > 0)
    // если меню закрыто, тогда откроем его renderPopup
    cloneNodes.length ? unmountPopup() : renderPopup();
}

// закрываем попап удаляем клонированное меню и очищаем cloneNodes
function unmountPopup() {
    cloneNodes.forEach(node => node.remove());
    cloneNodes.length = 0;
}

function renderPopup() {
    document.querySelectorAll("#menu").forEach((menu) => {
        // создаем клоны меню
        const cloneMenu = menu.cloneNode(true);
        // заполняем клонами массив
        cloneNodes.push(cloneMenu);
        // добавляем клоны в popup
        popup.appendChild(cloneMenu);
        
        cloneMenu.className = 'hamburger-menu';
    });
}



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

