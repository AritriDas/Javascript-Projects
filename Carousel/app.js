const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images');

let counter = 0;
let images = ['bg.jpg','bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg'];

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function nextSlide(){
    
    container.animate([{opacity:'0.5'},{opacity: '1.0'}],{duration : 2000, fill: 'forwards'});

    if(counter < (images.length-1)) {
    counter++;
    console.log(counter);
    container.style.backgroundImage = `url(${images[counter]})`;
    }
    else {
        counter = -1;
    }
}

function prevSlide(){

    container.animate([{opacity:'0.5'},{opacity:'1'}],{duration:2000, fill: 'backwards'})

   if(counter > 0) {
    counter--;
    console.log(counter);
    container.style.backgroundImage = `url(${images[counter]})`;
   }
   else
       counter = (images.length);
}