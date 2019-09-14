const express = require('express');
const router = express.Router();

// @route   GET api/users
// desc     test posts
// @access  Public
router.get('/',(req,res)=>{
    res.send('Posts route');
})


module.exports = router;