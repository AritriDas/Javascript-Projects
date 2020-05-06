let counter = document.querySelector('.counter');
let lowerCount = document.querySelector('#lowerCount');
let upperCount = document.querySelector('#upperCount');

let count = 0;

upperCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter() {
    count ++;
    counter.innerHTML = count;
}

function decrementCounter() {
    count --;
    counter.innerHTML = count;
}
