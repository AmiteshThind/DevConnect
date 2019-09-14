const express = require('express');
const router = express.Router();

// @route   GET api/users
// desc     Register user
// @access  Public
router.post('/',(req,res)=>{
     console.log(req.body);//req.body is data being sent with the post request from the browser(needs to be initialized in server.js)
})


module.exports = router;