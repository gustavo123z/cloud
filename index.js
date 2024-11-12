
function random(){
var text =("abcdefghijklmnopqrstuvwxyz0123456789")
letter = text[math.floor(math.random() *text.length)]
return letter

}





function rain(){
let cloud = document.querySelector('.cloud');
let e = document.createElement('div');
let left = Math.floor(math.random() * 320);
let size = math.random() *1.5;
e.classList.add('text');
cloud.appendChild(e);
e.innerText = randomtext()
e,style.left = left + 'px';
e.style.fontSize = 0,5+size+'em';
e.style


setTimeout(function(){
cloud.removeChild(e)
},2000)


}



setInterval(function(){
rain()
},20);