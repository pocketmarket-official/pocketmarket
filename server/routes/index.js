import controller from "../controller/store.controller";

var express = require('express');
var router = express.Router();

router.get('/', controller.index);
module.exports = router;
