const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.get('/', (req, res) =>{
    Task.find(function(err,tasks) {
        console.log(tasks)
    });
    res.json({
        Status: 'API is works'
    });
});

module.exports = router;