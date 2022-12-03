// const {Router}=require('express');
import { Router } from 'express';
// const {renderNoteForm,createNewNote,renderNotes, updateNote,renderEditForm,deleteNote}= require('../controllers/notes.controllers')
import {
    renderNoteForm,
    createNewNote,
    renderNotes,
    updateNote,
    renderEditForm,
    deleteNote
} from '../controllers/notes.controllers.js'
const router=Router();
router.get('/notes/add', renderNoteForm);
router.post('/notes/new-note', createNewNote);
// get all notes
router.get('/notes', renderNotes)
// edit note
router.get('notes/edit/:id', renderEditForm);
router.put('notes/edit/:id', updateNote)
//delete notes
router.delete('notes/delete/:id', deleteNote)
// module.exports=router;
export default router