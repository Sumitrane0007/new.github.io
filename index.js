let span = document.getElementById('span');
let btn = document.getElementById('btn');
let head = document.getElementById('head');

btn.addEventListener('click',function(){
    let number = Math.floor(Math.random() * 2);
    span.innerHTML = number;
    head.innerHTML = " "

    if( span.innerHTML === "1"){
        head.innerHTML = "winner"

    }
})