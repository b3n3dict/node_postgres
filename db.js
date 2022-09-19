const Pool = require('pg').Pool;


const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'students',
    password:'benben123',
    port:5432,

})

module.exports =  pool;