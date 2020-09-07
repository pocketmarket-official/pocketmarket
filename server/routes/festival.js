var express = require('express');
var router = express.Router();
import controller from '../controller/festival.controller';

/* GET users listing. */
router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
