// const {Router}= require('express');
import { Router } from 'express';
// const {renderIndex, renderAbout}=require('../controllers/index.controllers')
import {renderIndex, renderAbout} from '../controllers/index.controllers.js'
const router= Router();
router.get('/',  renderIndex)
router.get('/about', renderAbout)
// module.exports= router;
export default router;