const mongoose=require('mongoose');

var user_modal= mongoose.model('user_details', {
    User_Id: {type:Number, required:true},
    Name:{type:String, required:true},
    Age:{type: Number, required:true}
});

module.exports={user_modal};