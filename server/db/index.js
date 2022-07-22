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

//localhost:3000/api/test
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

persondb.person = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM familyTree WHERE id = ?`,[id],(err,results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

//Return parents based on persons ID
persondb.parents = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT forename,surname FROM familyTree WHERE id = (SELECT motherId FROM familyTree WHERE id = ?) OR id = (SELECT fatherId FROM familyTree WHERE id = ?)`,[id,id],(err,results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//Return parents based on persons ID
//id = (SELECT id FROM familyTree WHERE motherId = ?) OR
persondb.children = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM familyTree WHERE id in (SELECT id FROM familyTree WHERE motherId = ?) OR id in (SELECT id FROM familyTree WHERE fatherId = ?)`,[id,id],(err,results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = persondb;