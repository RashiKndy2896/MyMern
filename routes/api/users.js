const express = require('express');
const router = express.Router();
const { body, validationResult} = require('express-validator');

const User = require('../../models/User');


//@route   POST api/profile
//@desc    Test route
//@access  Public
router.post('/', 
[
    body('name', 'Name is Required')
    .not()
    .isEmpty(),
    body('cause', 'Cause is Required')
    .not()
    .isEmpty(),


],
 async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json( { errors: errors.array() } );
    }
    console.log(req.body);

    const {name, cause} = req.body;
    

    const user = new User({
        name,
        cause

    });

    user.save();
    console.log("values added to db");
    res.send("Values Added");
    
});


module.exports = router;