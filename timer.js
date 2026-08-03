let time = 120;

const countdown = document.getElementById('countdown');

const timer = setInterval(function() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

   if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    countdown.textContent = minutes + ':' + seconds;
    time--;

    if (time < 0) {
        clearInterval(timer);
        window.location.href = "index.html";
    }
   
}, 1000);