let seconds = 30;
function updateTime(){
    const timer = document.getElementById("timer");
    const mins = String(Math.floor(seconds/60)).padStart(2,'0');
    const secs = String(seconds%60).padStart(2,'0');
    timer.textContent = `${mins}:${secs}`;
    if(seconds>0)seconds--;
}
updateTime();
setInterval(updateTime,1000);