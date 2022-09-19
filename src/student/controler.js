const pool = require('../../db')
const queries = require('./queries')

// get students
const getStudents= (req,res)=>{
   pool.query(queries.getStudents,(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows)
   })
}
// get student by id
const getStudentById = (req,res)=>{
    const id =  parseInt(req.params.id)
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error) throw error; 
            res.status(200).json(results.rows)
    })

}
// add student by id
const addStudent = (req,res)=>{
  
    let {name,email,age,dob} = req.body;
    // check if the email is exists 
    pool.query(queries.emailExists,[email],(error,results)=>    {
        if(results.rows.length){
            res.send('Email already exists')
        }else{
      pool.query(queries.addStudent,[name,email,age,dob],(error,results)=>{
        if(error) throw error
        res.status(200).send("student data added")
    })
        }
    })

}

// delete student by id
const deleteStudentById = (req,res)=>{
       const id = req.params.id;
      pool.query(queries.deleteStudent,[id],(error,results)=>{
        if(error) throw error
        res.status(200).send("student data deleted");
      })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudentById
}