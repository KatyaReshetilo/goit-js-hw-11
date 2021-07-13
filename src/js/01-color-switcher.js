const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const body = document.querySelector('body');

const randomColor = {
    intervalId: null,
    start() {
        startBtn.setAttribute("disabled", true);
        this.intervalId=setInterval(()=>{body.style.backgroundColor = getRandomHexColor();}, 1000)
    },

    stop() {
        startBtn.removeAttribute("disabled");
        clearInterval(this.intervalId);
    }
}


startBtn.addEventListener("click", () => { randomColor.start();});
stopBtn.addEventListener("click", () => { randomColor.stop();});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 