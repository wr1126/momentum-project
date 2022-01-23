const bg01 = document.querySelector("#bg01"); 
const bg02 = document.querySelector("#bg02");
const img = ["bird01.png", "bird02.png", "bird03.png", "candle.png", "griffin.png", "shall01.png", "shall02.png"];

function randomImg(){
    const random01 = img[Math.floor(Math.random() * img.length)];
    const random02 = img[Math.floor(Math.random() * img.length)];    

    if(random01 === random02){
        randomImg();
    }else{
        bg01.style.backgroundImage = `url(./img/${random01})`;
        bg02.style.backgroundImage = `url(./img/${random02})`;
    }
}

randomImg();
