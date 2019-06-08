const router = require('express').Router();

router.get('/notes', (req,res)=>{
    res.send('notas de la db');
});

module.exports = router;