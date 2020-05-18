const timer = document.querySelector('timer');

function showTime() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);
    hours = changeHours(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
}

function convertFormat(hours) {
    let format = 'AM';

    if(hours >= 12)
        format = 'PM';

    return format;
}

function changeHours(hours) {
    hours = hours % 12;
    return hours;
}

function addZero(time) {
    if(time < 10)
        time = '0' + time ;
    
    return time;
}