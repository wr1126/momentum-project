const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input:first-child");
const greetings = document.querySelector(".greetings");
const message = document.querySelector(".greetings p");

const HIDDEN = "hidden";
const USERNAME = "username";

function submit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME, loginInput.value);
    sayHello();
}

function sayHello(){
    const currentUser = localStorage.getItem(USERNAME);
    message.innerHTML = `Hello, Master<br><span>${currentUser}<span>`;
    greetings.classList.remove(HIDDEN);
    setCookie("momentum", "abc", 1);
} 


const savedUsername = localStorage.getItem(USERNAME);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", submit);
}else{
    sayHello();
}


function fadeout(){
    greetings.classList.remove("fadein");
    greetings.classList.add("fadeout");
    greetings.style.opacity = "0";
    setTimeout(hide, 1500);
}

function hide(){
    greetings.classList.add(HIDDEN);
    const page = document.querySelector(".wrap");
    page.classList.remove(HIDDEN);
    page.classList.add("fadein");
}

//expire 날짜 지정 및 쿠키 생성
function setCookie(name, value, day){
    const date = new Date();
    date.setDate(date.getDate() + day);
    
    let myCookie = "";
    myCookie += name + '=' + value + ";";
    myCookie += 'Expires=' + date.toUTCString();

    document.cookie = myCookie;
}

//해당 사이트의 쿠키 있는지 확인
function getCookie(name){
    const cookies = document.cookie.split(';'); 
    // 브라우저에 저장되어있는 각 쿠키들을 ;로 구분되는 배열로 생성
    for(var i in cookies){
        if(cookies[i].indexOf(name) > -1){
            hide();
        }
    }
}
getCookie('momentum');

greetings.addEventListener("click", fadeout);