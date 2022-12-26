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

let visualEl = document.querySelectorAll('.visual');
let clearEl = document.querySelectorAll('.clear');
let repwdEl = document.querySelectorAll('.repwd');
let clearElArr = [...clearEl];
let repwdElArr = [...repwdEl];
clearElArr.reverse();
repwdElArr.reverse()

// visualEl.forEach(e=>{
   // e.addEventListener('click',i=>{
     //   let num = i.target.id; 
       // i.target.style.display='none';
       // clearElArr[num].style.display='block';
       // repwdElArr[num].style.visibility= 'visible';
 //   })
// })

// form(hidden) 생성 활용

// visualEl.forEach(e=>{
   // e.addEventListener('click',i=>{
     //   let num = i.target.id;
     //   let repwd=prompt('비밀번호',);
     //   console.log(repwd);
     //   let fo = document.createElement('form');
     //   let inp = document.createElement('input');
     //   inp.setAttribute('type', 'hidden');
     //   inp.setAttribute('name', 'repwd');
     //   inp.setAttribute('value', repwd);
     //   fo.appendChild(inp);
     //   fo.setAttribute('method', 'post');
     //   fo.setAttribute('action', `/content/${num}`);
     //   document.body.appendChild(fo);
     //   fo.submit();

    // })
// })

let formEl = document.querySelectorAll('.reply');
let formElArr = [...formEl];
formElArr.reverse();

visualEl.forEach(e=>{
    e.addEventListener('click',i=>{
        let num = i.target.id;
        let repwd=prompt('비밀번호',);
        fetch(`/remove/${num}`, {method : 'post'}).then((res)=>res.json()).then((data)=>{  
           if(data.pwds == repwd) {
            formElArr[num].submit();
           }else {
            alert('비밀번호가 틀립니다.'); window.location.replace('/');
           }
        });

    })
})
