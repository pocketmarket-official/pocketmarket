var express = require('express');
var router = express.Router();


router.get('/', (req, res) => res.json({data:'this is index.'}));
module.exports = router;
