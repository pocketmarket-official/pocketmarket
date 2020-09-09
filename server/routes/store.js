var express = require('express');
var router = express.Router();
import controller from '../controller/store.controller';

/* GET users listing. */
router.get('/', controller.index);


module.exports = router;
