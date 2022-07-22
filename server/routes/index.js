const express = require('express');
const db = require('../db');
const router = express.Router();

//Return all people
router.get('/id',async (req,res) => {
    //res.json({test:`test`});
    try{
        let results = await db.all();
        res.json(results);
    }catch (e)
    {
        console.log(e);
        res.sendStatus(500);
    }
});

//Return person by id
router.get('/id/:id',async (req,res) => {
    //res.json({test:`test`});
    try{
        let results = await db.person(req.params.id);
        res.json(results);
    }catch (e)
    {
        console.log(e);
        res.sendStatus(500);
    }
});

//Return parents by person id
router.get('/parents/:id',async (req,res) => {
    //res.json({test:`test`});
    try{
        let results = await db.parents(req.params.id);
        res.json(results);
    }catch (e)
    {
        console.log(e);
        res.sendStatus(500);
    }
});

//Return children by parent id
router.get('/children/:id',async (req,res) => {
    //res.json({test:`test`});
    try{
        let results = await db.children(req.params.id);
        res.json(results);
    }catch (e)
    {
        console.log(e);
        res.sendStatus(500);
    }
});



module.exports = router;

