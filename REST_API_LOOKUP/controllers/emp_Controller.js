var {emp_modal} =require('../modals/emp_modal');
var{user_modal}=require('../modals/user_modal')

module.exports.lookup = async(req,res) =>{

    // console.log('emp lookup called');
    // let userdata = await user_modal.find({});
    // let empdata = await emp_modal.find({});
    // console.log("user", userdata);
    // console.log("emp", empdata);

    try
    {
        const result=await emp_modal.aggregate([
            {
                $lookup:
                {
                    from:'user_details',
                    localField:'Emp_Id',
                    foreignField:'User_Id',
                    as: 'user_emp'
                }
            }
        ])
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
   }
};

//????????????????????????????

module.exports.all_emp_details= async(req, res)=> {
    
    var empdata=new emp_modal({
        Emp_Id: req.body.id,
        Department:req.body.dpt,
        Post:req.body.post
    })
    try{
        const result= await empdata.save();
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}