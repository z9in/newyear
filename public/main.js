//main.js

const imgEl = document.getElementsByClassName('img_box')[0];
let num=0;
setInterval(function(){
    num++
    imgEl.setAttribute('style', `opacity:0;`)
    imgEl.setAttribute('style', `background-image: url(./image/img_box${num%3}.jpg); opacity:1`)

},5000);

const textEl = document.getElementById('write');
const textLengEl = document.getElementsByClassName('textLength')[0];

textEl.addEventListener('keyup', ()=>{
    let leng = textEl.value.length    
    if(leng > 255) {
        alert('255글자가 넘었습니다.')
        location.reload
        textEl.value = textEl.value.substr(0,255)
        textLengEl.innerHTML=`<p>255/255</p>`
    }else{
        textLengEl.innerHTML=`<p>${leng}/255</p>`
    }
})