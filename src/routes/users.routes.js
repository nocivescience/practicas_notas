// const {renderUser}=require('../controllers/users.controllers.js');
import {renderUser} from '../controllers/users.controllers.js';
import { Router } from 'express';
// const {Router}= require('express');

const router=Router();
router.get('/users/new',renderUser)
// module.exports=router;
export default router;