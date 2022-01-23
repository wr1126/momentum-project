const API_KEY = "46effaa0abf3df20689f7de818d2701c";

function onOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
    .then((data) => {
        const location = document.querySelector("#location");
        location.innerHTML = `${data.name}, &nbsp&nbsp${data.weather[0].main}`;
    });
}

function onError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onOk, onError);