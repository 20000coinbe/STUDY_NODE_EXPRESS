const express = require('express');

// ROUTING
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

//view engine
const nunjucks = require('nunjucks');

const app = express();

app.use('/admin', admin); // admin부터는 니가 처리
app.use('/contacts', contacts);

const port = 3030;

nunjucks.configure('templates', {
    autoescape : true, // 오류공격 태그를 걸러준다
    express: app, // 객체 설정
});

app.get('/', (req, res) => {
    res.send('express start');
})

app.listen(port, () => {
    console.log(`Start Server... PORT number: ${port}`);
})

module.exports = app;