const mysql = require('mysql2');


const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'root',
    password: 'rootpw',
    database: 'familytree',
    host: 'localhost',
    port: '3306'
});

let persondb = {};

persondb.all = () => {
   return new Promise((resolve, reject) => {
     pool.query(`SELECT * FROM familyTree`,(err,results) => {
        if(err){
            return reject(err);
        }
        return resolve(results);
      });
   });
};

module.exports = persondb;