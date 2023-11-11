const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li'); // Added '.' before pagination-mobile
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');
let id = 0;
const images = ['/380757099_18383486110061200_5753010906164533249_n.jpg', '/394837493_18389248576061200_7269996410839184351_n.jpg', '/395114904_18389248561061200_6723051877184685908_n.jpg'];
const progressWidth = ['33%', '66%', '100%'];
const text = ['Work', 'Active', 'Travel'];
for (let i = 0; i < cntrl.length; i++) {
    cntrl[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide();
    });
    cntrlMob[i].addEventListener('click', () => {
        slider(i);
        id = i;
        stopAutoSlide();
    });
}
function slider(i) {
    img.src = images[i];
    progress.style.width = progressWidth[i];
    title.innerText = text[i] + " Collection"; 
    subTitle.forEach(sub => {
        sub.innerText = text[i] + " Collection"; 
    });
    count.innerText = "/0" + (i + 1);
    for (let j = 0; j < cntrl.length; j++) { 
        cntrl[j].classList.remove('active');
        cntrlMob[j].classList.remove('pag-active');
    }
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}
function nextSlide() {
    id++;
    if (id > cntrl.length - 1) {
        id = 0;
    }
    slider(id);
}
let autoSlide = setInterval(nextSlide, 10000);
function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}
