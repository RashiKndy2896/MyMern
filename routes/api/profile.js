const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');
const User = require('../../models/User');


//@route   GET api/profile
//@desc    Test route
//@access  Public
router.get('/', async(req,res) => {
    try{
        var findData = await User.find();
        res.json(findData);
        console.log("---------");
        console.log(findData);
        

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }
    
});


module.exports = router;