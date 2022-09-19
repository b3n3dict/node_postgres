const {Router} = require('express')
const {getStudents,getStudentById,addStudent,deleteStudentById}  = require('./controler')
const router = Router();

router.get('/',getStudents)
router.post('/',addStudent)
router.get('/:id',getStudentById)
router.delete("/:id",deleteStudentById)
module.exports = router;