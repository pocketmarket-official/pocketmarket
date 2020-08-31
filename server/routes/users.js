var express = require('express');
var router = express.Router();
import controller from '../controller/user.controller';

/* GET users listing. */
router.get('/', controller.index);

router.get('/:id', controller.show)

router.delete('/:id', controller.destroy)

router.post('/', controller.create)

router.put('/:id', controller.update)


module.exports = router;
