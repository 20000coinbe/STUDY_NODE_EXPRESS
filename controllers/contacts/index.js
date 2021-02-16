const { Router } = require('express');
const router = Router();
const ctrl = require('./contacts.ctrl')

router.get('/', ctrl.get_main);

router.get('/list', ctrl.get_list);

module.exports = router;