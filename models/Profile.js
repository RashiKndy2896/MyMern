const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cause: {
        type: String,
        required: true
    },
    date:{
        type: Date
        
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);