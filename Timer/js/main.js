const control = document.querySelector('.timer__btn--control');
const reset = document.querySelector('.timer__btn--reset');
const minute = document.querySelector('.timer__part--minutes');
const sec = document.querySelector('.timer__part--seconds');
const alert = document.querySelector('.alert');


let interval = null;
let remainingSeconds = 0;


control.addEventListener('click', () => {
  if(interval === null){
      start();
  }
  else {
      stop();
  }
});

reset.addEventListener('click', () => {
    const inputMinutes = prompt("Enter number of minutes")
    if(inputMinutes < 60){
        stop()
        remainingSeconds = inputMinutes * 60
        updatTime()
    }
});


function updatTime() {
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = remainingSeconds % 60;
    minute.innerHTML = minutes.toString().padStart(2, '0')
    sec.textContent = seconds.toString().padStart(2, '0')
    if(remainingSeconds === 0){
        alert.innerHTML = "Time is up!"
    }
}

function updatInterfaceControls(){
    if(interval === null){
        control.innerHTML=`<span class="material-icons">play_arrow</span>`;
        control.classList.add("timer__btn--start");
        control.classList.remove("timer__btn--stop");
    }
    else {
        control.innerHTML=`<span class="material-icons">pause</span>`;
        control.classList.add("timer__btn--stop");
        control.classList.remove("timer__btn--start");
    }
}
function start (){
    if(remainingSeconds===0) return;
    interval =setInterval(() => {
        remainingSeconds--;
        updatTime();

        if(remainingSeconds===0){
            stop()
        }
    }, 1000);
    updatInterfaceControls()
}

function stop (){
    clearInterval(interval);
    interval = null;
    updatInterfaceControls();
}
