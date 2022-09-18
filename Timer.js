const addnew = document.getElementById('add');
const popupshow = document.getElementById('popuptimer');
const popupclose = document.getElementById('close');
const preloader = document.getElementById('loader');

addnew.addEventListener('click', p => {
    p.preventDefault();
    popupshow.classList.add('show');
});

popupclose.addEventListener('click', p => {
    p.preventDefault();
    popupshow.classList.remove('show');
});

// loading

setTimeout(() => {
    preloader.classList.add('loader');
}, 1400);

//

//

//
function updateTimer() {
    future = Date.parse(datestart());
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById('app').innerHTML =
        '<div>' +
        d +
        '<span>days</span></div>' +
        '<div>' +
        h +
        '<span>hours</span></div>' +
        '<div>' +
        m +
        '<span>minutes</span></div>' +
        '<div>' +
        s +
        '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);

function datestart() {
    let b = !isNaN(document.querySelector('input#dateinput').value)
        ? '10/10/2022'
        : document.querySelector('input#dateinput').value;

    return b;
}
