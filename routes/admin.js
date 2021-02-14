const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.send('admin 이후 URL')
});

router.get('/products', (req, res) => {
    // res.send('Router를 이용한 처리 : admin이후의 주소만 써주면 된다');
    res.render('admin/products.html', {
        message: "render()를 통해서 templates에 뿌린다",
        online: "express 공부중"

    });
});

module.exports = router;