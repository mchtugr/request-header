const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');

router.get('/test', (req, res) => {
    res.json({
        msg: 'Test succeded'
    })
});

router.get('/', (req, res) => {
    const ipaddress = req.headers['x-forwarded-for'];   
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
    res.json({
        ipaddress, language, software
    })
})

module.exports = router;
