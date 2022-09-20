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

function template(timer) {
    return `
    <div id="cardtimer" class="timer" >
    <h2>${timer.title}</h2>
    <h3>${datecal(timer.date)}</h3>
       
    </div>
        
    `;
}
function printtoview() {
    document.getElementById('aaaa').innerHTML = `
    <div >
       
    ${showdata.map(template).join('')} 
    
    </div>
    
    `;
}
printtoview();
setInterval('printtoview()', 1000);
