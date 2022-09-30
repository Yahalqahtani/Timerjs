const showdata = JSON.parse(localStorage.getItem('myTimers'));

//

function datecal(timer) {
    futdate = new Date(timer);
    now = new Date();
    diff = futdate.getTime() - now.getTime();
    //
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;
    //

    if ((d || h || m) < 0) {
        return `<div>  انتهى المؤقت </div>`;
    } else {
        return `<div>  Days ${d} hours ${h} Min ${m} Sec ${s} </div>`;
    }
}

//

function template(timer, i) {
    return `
    <div id="cardtimer" class="timer" >
    <h2>${timer.title}</h2>
    <h3>${datecal(timer.date)}</h3>
   <a> <img id='icond' src="./icons/remove.png" width="30" height="30" onclick='dd()'}'></a>
    </div>
        
    `;
}
function printtoview() {
    document.getElementById('aaaa').innerHTML = `
    
       
    ${showdata.map(template).join('')} 
    
   
    
    `;
}
// function icondel(timer, i) {
//     let r = document.getElementById('aaaa');
//     r.addEventListener('click', () => {
//         console.log(timer[i]);
//     });
// }

function dd() {
    let g = document.getElementById('aaaa');
    for (var i = 0, len = g.children.length; i < len; i++) {
        (function (index) {
            g.getElementsByTagName('img')[i].onclick = function () {
                showdata.splice(index, 1);
                localStorage.setItem('myTimers', JSON.stringify(showdata));
            };
        })(i);
    }
}

printtoview();
setInterval('printtoview()', 1000);
