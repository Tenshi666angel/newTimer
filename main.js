const display = document.querySelector('.display h1');
const firstButton = document.querySelector('.start');
const clearButton = document.querySelector('.clear');

let interval = undefined;

const timer = {
    minutes: 0,
    seconds: 0,
    milis: 0,

    started: false,

    clear() {
        this.milis = 0;
        this.seconds = 0;
        this.minutes = 0;
    },

    get time() {
        return `${this.minutes}:${this.seconds}:${this.milis}`;
    }
}

function timerLoop() {
    timer.milis++;
    display.textContent = timer.time;

    if(timer.milis === 100) {
        timer.seconds++;
        timer.milis = 0;
    }

    if(timer.seconds === 60) {
        timer.milis++;
        timer.seconds = 0;
    }
}

function handleTimer() {
    if(!timer.started) {
        interval = setInterval(timerLoop, 10);
        timer.started = true;
        firstButton.className = 'pause';
        firstButton.textContent = 'pause';
    } else {
        clearInterval(interval);
        timer.started = false;
        firstButton.className = 'continue';
        firstButton.textContent = 'continue';
    } 
    
}

function clearTimer() {
    clearInterval(interval);
    timer.started = false;
    firstButton.className = 'start';
    firstButton.textContent = 'start';
    timer.clear();
    display.textContent = timer.time;
}

firstButton.addEventListener('click', handleTimer);
clearButton.addEventListener('click', clearTimer);