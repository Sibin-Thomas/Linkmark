const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bookmark = require('../models/bookmark');
const User = require('../models/user');


router.get('/',(req,res)=>{
	res.send(req);
})

module.exports = router;