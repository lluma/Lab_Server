const express = require('express');
const bodyParser = require('body-parser');

const authModel = require('../Models/authModel');

const router = express.Router();
router.use(bodyParser.json());

router.post('/auth', function(req, res) {
    const {email, pwd} = req.body;
    if (!email || !pwd) {
        const err = new Error('Email and Password are required!');
        err.status = 400;
        throw err;
    }

    authModel.auth(email, pwd).then(valid => {
        res.json(valid);
    });
});

module.exports = router;