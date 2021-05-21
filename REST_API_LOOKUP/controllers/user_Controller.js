var {user_modal}=require('../modals/user_modal');

module.exports.Users_detail = async(req,res) =>{

    try{
        const result= await user_modal.find();
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports.Users_detail_id= async(req, res)=>{
    var id=req.params.id;
    try{
        const result=await user_modal.find(id);
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports.Add_User_Detail= async(req,res)=>{
    var userdata=new user_modal({
        User_Id:req.body.id,
        Name:req.body.name,
        Age:req.body.age
    })
    console.log(req.body);
    try{
        const result= await userdata.save();
        res.status(200).json({message: "data posted successfully"})
    }
    catch(err){
        res.status(500).json({err});
    }
}

module.exports.Update_User_details =async(req,res)=>{
    var updateuser={
        User_Id:req.body.id,
        Name:req.body.name,
        Age:req.body.age
    }
     console.log('put called');
    try{
        const update_data= await user_modal.findByIdAndUpdate({_id: req.params.id},{ $set: updateuser },{new:true});
        res.status(500).send(update_data);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports.Delete_User_details= async(req, res) =>{
    try{
        await user_modal.findByIdAndDelete(req.params.id);
        res.status(200).send("User Deleted");
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports.lookup=async(req,res)=>{
    console.log('user lookup called');
    try{
      
        const result=await user_modal.aggregate([
            {
                $lookup:
                {
                  from:'emp_details',
                  localField:'User_Id',   //????????????????
                  foreignField:'Emp_Id',
                  as:'user_emp'
                }
            }
        ]);
     res.status(200).send(result);
    }
    catch(err){
     res.status(500).send(err);
    }
}


