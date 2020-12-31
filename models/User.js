const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
        
    },
    slot:{
        type: Number
    }
});

module.exports = User = mongoose.model('user', UserSchema);