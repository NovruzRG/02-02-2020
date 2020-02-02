// let kq = document.querySelector('input');
// let price = 0;
// let p =document.querySelector('p');
// kq.addEventListener('keyup', function () {
//     let weight = Number(kq.value);
    
//     if (weight > 0 && weight < 0.25) {
//         price = weight * 2.5;
//     } else if (weight >= 0.25 && weight < 0.5) {
//         price = weight * 3.5;
//     } else if (weight >= 0.5 && weight < 0.75) {
//         price = weight * 4.5;
//     } else if (weight >= 0.75 && weight < 1) {
//         price = weight * 5.5;
//     } else if (weight >= 1 && weight < 2) {
//         price = weight * 6;
//     } else if (weight >= 2 && weight < 5) {
//         price = weight * 5;
//     } else if (weight >= 5 && weight < 10) {
//         price = weight * 4.5;
//     } else {
//         price = weight * 2.5;
//     }
//   p.innerText = price;

// })

let username = document.getElementById('username');
let password = document.getElementById('password');
let login = document.querySelector('button')
login.addEventListener('click', function(){
    if(username.value == "admin" && password.value =="admin"){
        username.style.background = 'green'
        password.style.background = 'green'
        }else{
            username.style.background = 'red'
            password.style.background = 'red'
        }
        
})



let interval;



let start = document.getElementById('start')
start.addEventListener('click', function (){
    interval = setInterval(function(){
        var d = new Date();
        var n = d.toLocaleTimeString();
        document.querySelector('p').innerHTML = n;
    },1000)
})
let stop = document.getElementById('stop')
stop.addEventListener('click', function(){

  clearInterval(interval)
        
})