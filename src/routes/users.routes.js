const {renderUser}=require('../controllers/users.controllers.js');
const {Router}= require('express');
const router=Router();
router.get('/users/new',renderUser)
module.exports=router;