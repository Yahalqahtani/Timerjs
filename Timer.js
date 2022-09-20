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
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    var time = date.toLocaleTimeString();

    document.getElementById('app').innerHTML =
        '<div>' + '<span>التاريخ</span></div>' + '<div>' + n + '<span>الوقت</span></div>' + '<div>' + time + '</div>';
}
setInterval('updateTimer()', 1000);
