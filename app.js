const caSlide = document.querySelector('.ca-slide');
const caImage = document.querySelectorAll('.ca-slide');

// Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter =1;
const size = caImage[0].clientWidth;

caSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listener

nextBtn.addEventListener('click', () => {
    // if (counter >= caImage.length -1) return;
    caSlide.style.transition = "transform 0.4s ease-in -out";
    counter++;
    caSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    caSlide.style.transition = "transform 0.4s ease-in -out";
    counter--;
    caSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

caSlide.addEventListener('transitionend', () => {
    if(caImage[counter].id === 'lastclone'){
    caSlide.style.transition = "none";
    counter = caImage.length - 2;
    caSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(caImage[counter].id === 'firstclone'){
        caSlide.style.transition = "none";
        counter = caImage.length - counter;
        caSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
   


});
    