const {Router} = require('express')
const {getStudents}  = require('./controler')
const router = Router();

router.get('/',getStudents)


module.exports = router;