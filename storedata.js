const listTimers = [{}];

const storeTimer = p => {
    p.preventDefault();

    t = document.getElementById('title timer').value;
    e = document.getElementById('dateinput').value;
    w = Date.parse(e) - new Date();

    days = Math.floor(w / (1000 * 60 * 60 * 24));
    hours = Math.floor(w / (1000 * 60 * 60));
    mins = Math.floor(w / (1000 * 60));
    secs = Math.floor(w / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;
    //data array
    const timer = [
        {
            title: t,
            d: d,
            h: h,
            m: m,
            s: s,
        },
    ];
    listTimers.push(timer);

    console.log(listTimers);
    document.querySelector('form').reset();

    localStorage.setItem('myTimers', JSON.stringify(listTimers));
};
document.getElementById('save').addEventListener('click', storeTimer);
