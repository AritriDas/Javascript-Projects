const btns = document.querySelectorAll('.btn');
const screen =  document.querySelector('.screen');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

for(let i = 0 ; i < btns.length ; i++) {
    btns[i].addEventListener('click', function (){
        let num = btns[i].getAttribute('data-num');
        screen.value += num;
    }) 
}

equal.addEventListener('click', function() {
    let value = eval(screen.value);
    screen.value = value;
})

clear.addEventListener('click', function() {
    screen.value = '';
})