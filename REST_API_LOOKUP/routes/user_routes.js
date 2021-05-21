const express=require('express');
const router=express.Router();

const controller=require('../controllers/user_Controller')

router.get('/',controller.Users_detail);
router.get('/:id',controller.Users_detail_id);
router.post('/',controller.Add_User_Detail);
router.put('/:id',controller.Update_User_details);
router.delete('/:id',controller.Delete_User_details);

//LookUp

router.get('/lookup',controller.lookup);

module.exports=router;
