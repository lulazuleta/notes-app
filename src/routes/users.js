const router = require('express').Router();

router.get('/users/sign_in', (req,res)=>{
    res.send('ingresando a la app');
});

router.get('/users/sign_up', (req,res)=>{
    res.send('formulario de autenticacion');
});

module.exports = router;