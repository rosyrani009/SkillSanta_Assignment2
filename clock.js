var tm,t1,t2;

/* function to show time in 12 hour format */
function clock1() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    let time;
    
    if (hrs == 0) hrs = 12;//12
    if (hrs > 12) {         //12
    hrs = hrs - 12;
    period = "PM";
    }

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0'+ mins : mins;
    secs = secs < 10 ? '0'+ secs : secs;
    time = hrs + ':' + mins + ':' + secs + ' ' + period;
    document.getElementById("clock").innerHTML = time;
}

/* function to show time in 24 hour format */
function clock2() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time;

    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0'+ mins : mins;
    secs = secs < 10 ? '0'+ secs : secs;
    time = hrs + ':' + mins + ':' + secs;
    document.getElementById("clock").innerHTML = time;
}

/*Function to start and stop the timer */
function start(tm)
{   if(tm == '24'){
        clearInterval(t1);
        t2 = setInterval(clock2,1000);
    }
    else if(tm == '12'){
        clearInterval(t2);
        t1 = setInterval(clock1,1000);
    }
}