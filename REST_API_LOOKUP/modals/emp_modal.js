const mongoose=require('mongoose');

var emp_modal=mongoose.model('emp_details',{
 Emp_Id:{type:Number, required:true},
 Department:{type:String, required:true},
 Post:{type:String,required:true}
});

module.exports={emp_modal};