const express = require("express");
const status = require('http-status')
const router = express.Router();


router.get('/health', (req, res) => {
  res.status(200).json({ 
    status: status.OK,
    message: 'Server is running',
    enviroment: process.env.ENVIROMENT 
  });
});

module.exports = router;