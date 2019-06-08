const router = require('express').Router();
const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
  res.render('notes/new-note');
});

router.post('/notes/new-note', async (req,res) => {
  const {title,description} = req.body;     //Obtener como constantes el titulo y la descripcion de la nota
  const errors = [];
  if(!title){         
    errors.push({text: 'Escriba un titulo por favor'}); 
  }
  if(!description){         
    errors.push({text: 'Escriba una descripcion por favor'}); 
  }
  if(errors.length > 0){
    res.render('notes/new-note', {
      errors,     //Para mostrar los errores
      title,
      description
    });
  } else {
    const newNote = new Note({title, description});
    await newNote.save();
    res.redirect('/notes');
  }
});

router.get('/notes', async(req, res) => {
  const notes = await Note.find().sort({date:'desc'});    //Todos los datos de DB
  res.render('notes/all-notes', {notes});

});


module.exports = router;