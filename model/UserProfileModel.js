const { default: mongoose } = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name :{
        type : String,
        require : true
    },

    username :{
        type : String,
        require : true
    },
    PhoneNumber :{
        type : String,
        require : true
    },
    profileImage  :{
        type : String,
        require : true
    },
})



module.exports = mongoose.model('Profile' , ProfileSchema)