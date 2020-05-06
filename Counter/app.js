let counter = document.querySelector('.counter');
let lowerCount = document.querySelector('#lowerCount');
let upperCount = document.querySelector('#upperCount');

let count = 0;

upperCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter() {
    count ++;
    counter.innerHTML = count;
    counter.animate([{opacity : '0.5'},{opacity : '1.0'}],{duration : 800, fill : 'forwards'});
}

function decrementCounter() {
    count --;
    counter.innerHTML = count;
    counter.animate([{opacity : '0.5'},{opacity : '1.0'}],{duration : 800, fill : 'forwards'});
}

