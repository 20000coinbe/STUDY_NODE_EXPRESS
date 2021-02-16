const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl')

function adminMiddleWare(req, res, next) {
    console.log("admin 미들웨어");
    next();
}

function adminProductsMiddleWare(req, res, next) {
    console.log("2. adminProducts 미들웨어");
    next();
}


router.get('/', adminMiddleWare, ctrl.get_admin);

router.get('/products', adminProductsMiddleWare, ctrl.get_products);

router.get('/products/write', ctrl.get_products_write);

router.post('/products/write', ctrl.post_products_write);

module.exports = router;