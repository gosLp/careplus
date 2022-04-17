const express = require('express');
const router = require('..');
const Router = express.Router();


router.get('/', (req, res, next)=>{

    res.render('Doc');


});

router.post('/', (req, res, next)=>{

    

});