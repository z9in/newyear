const express = require('express');
const app = express();
const fs = require('fs');
const readContents = fs.readFileSync('./DB/content.json', 'utf-8');
const readPwds = fs.readFileSync('./DB/pwds.json', 'utf-8');
const jsonParseCon = JSON.parse(readContents);
const jsonParsePwds = JSON.parse(readPwds);
const contents = [...jsonParseCon];
const pwds = [...jsonParsePwds];
const moment = require('moment');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    // console.log(pwds[0].names);
    res.render('./index', {contents, pwds})
})

app.post('/saying', (req,res)=>{
    let content = req.body.write;
    let name = req.body.name;
    let pwd = req.body.pwd;
    let date = moment().format('yyyy.MM.DD.');
    console.log(content, name, pwd, date);
    pwds.push({
        names : name,
        dates : date,
        pwds : pwd
    });
    contents.push(content)
    console.log(pwds);
    fs.writeFileSync('./DB/content.json', JSON.stringify(contents));
    fs.writeFileSync('./DB/pwds.json',JSON.stringify(pwds));
    res.redirect('/')
})

app.post('/content/:id', (req,res)=>{
    let id = req.params.id;
    let repwd = req.body.repwd;
    let q = pwds[id].pwds;
    console.log(id, repwd, q)
    if(q==repwd){
        contents.splice(id,1);
        pwds.splice(id,1);
        fs.writeFileSync('./DB/content.json',JSON.stringify(contents));
        fs.writeFileSync('./DB/pwds.json',JSON.stringify(pwds));
        res.redirect('/');
    }else {
        res.send("<script>alert('비밀번호가 틀립니다.'); window.location.replace('/');</script>")
    }

})




app.listen(3001,(req,res)=>{
    console.log('3001번 서버열림');
})

