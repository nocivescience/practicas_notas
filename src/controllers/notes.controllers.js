const Note= require('../models/Note')
const noteCtrls={};
noteCtrls.renderNoteForm=(req,res)=>{
    res.render('notes/new-note');
}
noteCtrls.createNewNote= async(req,res)=>{
    const {title, description}= req.body;
    const newNote= new Note({title, description});
    await newNote.save();
    res.send('creando una nota');
}
noteCtrls.renderNotes= async(req,res)=>{
    const notes= await Note.find();
    res.render('notes/all-notes', {notes})
}
noteCtrls.updateNote=(req,res)=>{
    res.send('updating note')
}
noteCtrls.renderEditForm=(req,res)=>{
    res.send('hello world')
}
noteCtrls.deleteNote=(req,res)=>{
    res.send('deleting note')
}
module.exports=noteCtrls