const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    if(hours >= 5 && hours <= 11){
        clock.innerHTML = `<span class="bird">𐦉</span> ${hours}:${minutes}`;
    }else if(hours >= 12 && hours <= 18){
        clock.innerHTML = `<span>☀︎</span> ${hours}:${minutes}`;
    }else{
        clock.innerHTML = `<span>☾</span> ${hours}:${minutes}`;
    }
}

getClock();
setInterval(getClock, 1000);