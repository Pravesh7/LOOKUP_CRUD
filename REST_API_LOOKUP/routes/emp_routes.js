const express=require('express');
const router=express.Router();

const empcontroller= require('../controllers/emp_Controller');

router.get('/',empcontroller.lookup);
router.post('/',empcontroller.all_emp_details);

module.exports=router;