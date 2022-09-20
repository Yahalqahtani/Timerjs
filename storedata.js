storeTimer = p => {
    p.preventDefault();
    const listTimers = JSON.parse(localStorage.getItem('myTimers')) || [];

    t = document.getElementById('title timer').value;
    e = document.getElementById('dateinput').value;
    console.log(e);

    //data array
    const timer = {
        title: t,
        date: e,
    };

    if (t && e !== '') {
        listTimers.push(timer);
        localStorage.setItem('myTimers', JSON.stringify(listTimers));
    }

    document.querySelector('form').reset();
};

document.getElementById('save').addEventListener('click', storeTimer);
